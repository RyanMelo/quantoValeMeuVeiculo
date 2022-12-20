import { Faq } from "components";
import { useEffect, useState } from "react";

interface TipoVeiculo {
    id: number,
    content: string,
    value: string,
}

interface ResultApi {
    Valor: string,
    Modelo: string,
    CodigoFipe: string,
    MesReferencia: string,
}

interface Caracteristicas {
    "nome": string,
    "codigo": string,
}

export function Home() {

    const [resultApi, setResultApi] = useState<ResultApi>();

    const [litaTipos, setListaTipo] = useState<TipoVeiculo[]>([
        {id: 0, content: "Carro", value: "carros"},
        {id: 1, content: "Moto", value: "motos"},
        {id: 2, content: "Caminhāo", value: "caminhoes"},
    ])

    const [selectTipo, setSelectTipo] = useState<string>()
    const [selectMarca, setSelectMarca] = useState<string>();
    const [selectModelo, setSelectModelo] = useState<string>();
    const [selectAno, setSelectAno] = useState<string>();

    const [listMarcas, setListMarcas] = useState<Caracteristicas[]>();
    const [listModelos, setListModelos] = useState<Caracteristicas[]>();
    const [listAnos, setListAnos] = useState<Caracteristicas[]>();

    const baseUrl = `https://parallelum.com.br/fipe/api/v1/`;

    const marcas = `${baseUrl}/${selectTipo}/marcas`
    const modelos = `${marcas}/${selectMarca}/modelos`
    const anos = `${modelos}/${selectModelo}/anos`

    async function calculaValorVeiculo() {
        try {
            const url = `https://parallelum.com.br/fipe/api/v1/${selectTipo}/marcas/${selectMarca}/modelos/${selectModelo}/anos/${selectAno}`;
            const data = await fetch(url).then(res => res.json())
            setResultApi(data);
            console.log(url)

        } catch (error) {
            console.error(error);
        }
    }

    async function getMarcas() {
        const data = await fetch(marcas, {method: 'GET'}).then(res => res.json())
        setListMarcas(data)
        console.log(data)
    }

    async function getModelos() {
        const data = await fetch(modelos, {method: 'GET'}).then(res => res.json())
        setListModelos(data.modelos)
        console.log(data.modelos)
    }

    async function getAnos() {
        const data = await fetch(anos, {method: 'GET'}).then(res => res.json())
        setListAnos(data)
        console.log(data)
    }

    useEffect(() => {
        if(selectTipo) {
            getMarcas()
        }
    }, [selectTipo])

    useEffect(() => {
        if(selectMarca) {
            getModelos()
        }
    }, [selectMarca])

    useEffect(() => {
        if(selectModelo) {
            getAnos()
        }
    }, [selectModelo])

    return(
        <>
            <div className="bg-primary-color py-5 lg:px-24 px-5 w-full">
                <div className="flex flex-row items-center">
                    <img src="./assets/images/car-logo.svg" alt="car-logo" className="w-[90px]"/>
                    <span className="text-2xl font-semibold text-white mt-3 ml-2">QUANTO VALE <br /> MEU VEÍCULO</span>
                </div>

                <div className="flex lg:flex-row flex-col items-center justify-between mt-5 mb-5 w-full">
                    <div className="bg-white p-5 lg:mr-10 flex-grow w-full max-h-max drop-shadow-2xl">
                        <h2 className="text-2xl xl:text-4xl font-extralight">Calcule o valor do seu <br /> carro, moto ou caminhāo!</h2>

                        <div className="mt-5">
                            <select required className="w-full rounded-md border-[1px] border-primary-color bg-secondary-color text-lg text-primary-color p-2" name="type" id="type"
                                value={selectTipo} onChange={ e => setSelectTipo(e.target.value)}
                            >
                                <option>Selecione o tipo</option>
                                <>
                                {
                                    litaTipos.map(element => {
                                        return <option value={element.value}>{element.content}</option>
                                    })
                                }
                                </>
                            </select>

                            <select required className="mt-3 w-full rounded-md border-[1px] border-primary-color bg-secondary-color text-lg text-primary-color p-2" name="brand" id="brand"
                                value={selectMarca} onChange={e => setSelectMarca(e.target.value)}
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

                            <select required className="mt-3 w-full rounded-md border-[1px] border-primary-color bg-secondary-color text-lg text-primary-color p-2" name="model" id="model"
                                value={selectModelo} onChange={e => setSelectModelo(e.target.value)}
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

                            <select required className="mt-3 w-full rounded-md border-[1px] border-primary-color bg-secondary-color text-lg text-primary-color p-2" name="year" id="year"
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

                            <button className="mt-3 w-full rounded-md bg-primary-color p-2 text-white"
                                onClick={calculaValorVeiculo}>
                                    Calcular Valor</button>

                        </div>
                    </div>
                    
                    {
                        resultApi ? 
                            <div className="bg-white p-5 flex-grow w-full max-h-max mt-3 lg:mt-0 drop-shadow-2xl">
                                <h2 className="text-xl md:text-3xl text-primary-color">{resultApi?.Modelo}</h2>
                                <p className="mt-6 text-primary-color text-lg">Codigo Tabela Fipe: {resultApi?.CodigoFipe}</p>

                                <p className="mt-7 text-xl md:text-3xl font-bold text-primary-color">Preço Médio:</p>
                                <h3 className="text-[36px] xl:text-7xl font-bold text-primary-color">{resultApi?.Valor}</h3>
                                <p className="text-xs md:text-lg text-primary-color">Ultima Atualização Em {resultApi?.MesReferencia}</p>
                            
                                <p className="mt-7 xl:mt-11 text-primary-color text-sm xl:text-lg"><strong>Atenção: </strong>Este é um valor para que você possa tomar como base, levando em
                                    consideração alguns aspectos de acordo com a tabela Fipe.</p>
                            </div>
                        : 
                        <div className="bg-white p-5 flex flex-grow w-full max-h-max mt-3 lg:mt-0 drop-shadow-2xl items-center justify-center">
                            
                        </div>
                    }
                </div>
            </div>

            <div className="bg-secondary-color py-7 lg:px-24 px-5 w-full">
                <Faq/>
            </div>

            <footer className="bg-primary-color flex items-center justify-center py-10">
                <a href="https://www.instagram.com/eu.ryanmelo/" target="_blank">
                    <p className="text-secondary-color text-lg">Desenvolvido por Ryan Melo</p>
                </a>
            </footer>
        </>
    );
}