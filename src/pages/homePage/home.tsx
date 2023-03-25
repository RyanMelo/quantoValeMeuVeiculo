import { Faq } from "components";
import { useEffect, useState } from "react";
import ReactLoading from 'react-loading';
import {GetMarcas, GetModelos, GetAnos, GetResult} from 'services/apiRequests.service'
import { listaTipos } from "models/VehicleType";
import { ResultApi } from "models/ApiResult";
import { Caracteristicas } from "models/Characteristics";

export function Home() {

    const [resultApi, setResultApi] = useState<ResultApi>();
    const [isLoading, setIsLoading] = useState<boolean>(false); 

    const [selectTipo, setSelectTipo] = useState<string>()
    const [selectMarca, setSelectMarca] = useState<string>();
    const [selectModelo, setSelectModelo] = useState<any>();
    const [selectAno, setSelectAno] = useState<string>();

    const [listMarcas, setListMarcas] = useState<Caracteristicas[]>();
    const [listModelos, setListModelos] = useState<Caracteristicas[]>();
    const [listAnos, setListAnos] = useState<Caracteristicas[]>();

    const [selectMarcaIsEnable, setSelectMarcaIsEnable] = useState(false);
    const [selectModeloIsEnable, setSelectModeloIsEnable] = useState(false);
    const [selectAnoIsEnable, setSelectAnoIsEnable] = useState(false);

    async function calculaValorVeiculo() {
        setIsLoading(true);
        const data = await GetResult(selectTipo, selectMarca, selectModelo, selectAno);
        setResultApi(data);
        setIsLoading(false);
    }

    async function fetchMarcas() {
        const marcas = await GetMarcas(selectTipo);
        setListMarcas(marcas)
    }

    async function fetchModelos() {
        const modelos = await GetModelos(selectTipo, selectMarca);
        setListModelos(modelos)
    }

    async function fechAnos() {
        const anos = await GetAnos(selectTipo, selectMarca, selectModelo);
        setListAnos(anos)
    }

    useEffect(() => {
        if(selectTipo) {
            fetchMarcas();
        }
    }, [selectTipo])

    useEffect(() => {
        if(selectMarca) {
            fetchModelos();
        }
    }, [selectMarca])

    useEffect(() => {
        if(selectModelo) {
            fechAnos();
        }
    }, [selectModelo])

    return(
        <>
            <div className="bg-primary-color py-5 lg:px-24 xl:px-72 px-5 w-full">
                    <div className="flex flex-row items-center">
                        <img src="./assets/images/car-logo.svg" alt="car-logo" className="w-[90px]"/>
                        <span className="text-2xl font-semibold text-white mt-3 ml-2">QUANTO VALE <br /> MEU VEÍCULO</span>
                    </div>

                    <div className={isLoading || resultApi ? "grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-4 mt-5 mb-5 w-full" : "grid grid-cols-1 lg:gap-4 mt-5 mb-5 w-full"}>
                        <div className="bg-white p-5 flex-grow w-full max-h-max drop-shadow-2xl">
                            <h2 className="text-2xl xl:text-4xl font-extralight">Calcule o valor do seu <br /> carro, moto ou caminhāo!</h2>

                            <div className="mt-5">
                                <select required className="cursor-pointer w-full rounded-md border-[1px] border-primary-color bg-secondary-color text-lg text-primary-color p-2" name="type" id="type"
                                    value={selectTipo} onChange={ e => { setSelectTipo(e.target.value); setSelectMarcaIsEnable(true) }}
                                >
                                    <option>Selecione o tipo</option>
                                    <>
                                    {
                                        listaTipos?.map(element => {
                                            return <option value={element.value}>{element.content}</option>
                                        })
                                    }
                                    </>
                                </select>

                                <select disabled={!selectMarcaIsEnable} required className="disabled:cursor-not-allowed cursor-pointer mt-3 w-full rounded-md border-[1px] border-primary-color bg-secondary-color text-lg text-primary-color p-2" name="brand" id="brand"
                                    value={selectMarca} onChange={e => {setSelectMarca(e.target.value); setSelectModeloIsEnable(true)}}
                                >
                                    <option>Selecione a marca</option>
                                    <>
                                    {
                                        listMarcas?.map(element => {
                                            return <option value={element.codigo}>{element.nome}</option>
                                        })
                                    }
                                    </>
                                </select>

                                <select disabled={!selectModeloIsEnable} required className="disabled:cursor-not-allowed cursor-pointer mt-3 w-full rounded-md border-[1px] border-primary-color bg-secondary-color text-lg text-primary-color p-2" name="model" id="model"
                                    value={selectModelo} onChange={e => {setSelectModelo(e.target.value); setSelectAnoIsEnable(true)}}
                                >
                                    <option>Selecione o modelo</option>
                                    <>
                                    {
                                        listModelos?.map(element => {
                                            return <option value={element.codigo}>{element.nome}</option>
                                        })
                                    }
                                    </>
                                </select>

                                <select disabled={!selectAnoIsEnable} required className="disabled:cursor-not-allowed cursor-pointer mt-3 w-full rounded-md border-[1px] border-primary-color bg-secondary-color text-lg text-primary-color p-2" name="year" id="year"
                                    value={selectAno} onChange={e => setSelectAno(e.target.value)}
                                >
                                    <option>Selecione o ano</option>
                                    <>
                                    {
                                        listAnos?.map(element => {
                                            return <option value={element.codigo}>{element.nome}</option>
                                        })
                                    }
                                    </>
                                </select>

                                <button className="disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer disabled:shadow-none shadow-lg hover:shadow-[#00C2FF] transition duration-150 ease-out hover:ease-in disabled:scale-100 hover:scale-[1.02] mt-3 w-full rounded-md bg-primary-color p-2 text-white"
                                    disabled={!selectMarca || !selectModelo || !selectAno}
                                    onClick={calculaValorVeiculo}>
                                        Calcular Valor</button>

                            </div>
                        </div>
                        
                        {
                            resultApi ? 
                                <div className="bg-white p-5 lg:ml-10 flex-grow w-full max-h-max mt-3 lg:mt-0 drop-shadow-2xl">
                                    <h2 className="text-xl md:text-3xl text-primary-color">{resultApi?.Modelo}</h2>
                                    <p className="mt-6 text-primary-color text-lg">Codigo Tabela Fipe: {resultApi?.CodigoFipe}</p>

                                    <p className="mt-7 text-xl md:text-3xl font-bold text-primary-color">Preço Médio:</p>
                                    <h3 className="text-[36px] xl:text-7xl font-bold text-primary-color">{resultApi?.Valor}</h3>
                                    <p className="text-xs md:text-lg text-primary-color">Ultima Atualização em: {resultApi?.MesReferencia}</p>
                                
                                    <p className="mt-7 xl:mt-11 text-primary-color text-sm xl:text-lg"><strong>Atenção: </strong>Este é um valor para que você possa tomar como base, levando em
                                        consideração alguns aspectos de acordo com a tabela Fipe.</p>
                                </div>
                            : 
                            <div className={isLoading ? "bg-white p-10 flex items-center justify-center flex-grow w-full max-h-max mt-3 lg:mt-0 drop-shadow-2xl" : "hidden"}>
                                <ReactLoading  type="spin" color="#0E48D8" height={310} width={310} />
                            </div>
                        }
                        
                    </div>
            </div>

            <div className="flex flex-col items-center bg-secondary-color py-7 lg:px-24 xl:px-72 px-5 w-full">
                <Faq/>
            </div>


            <footer className="bg-primary-color flex items-center justify-center py-5 xl:px-72">
                <span className="text-white">Desenvolvido por <a href="https://github.com/RyanMelo" target="_blanck">@RyaMelo</a></span> 
            </footer>
        </>
    );
}