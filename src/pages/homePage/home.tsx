import { Faq } from "../../components";

export function Home() {
    return(
        <>
            <div className="bg-primary-color py-5 lg:px-24 px-5 w-full">
                <div className="flex flex-row items-center">
                    <img src="./assets/images/car-logo.svg" alt="car-logo" className="w-[90px]"/>
                    <span className="text-2xl font-semibold text-white mt-3 ml-2">QUANTO VALE <br /> MEU CARRO</span>
                </div>

                <div className="flex lg:flex-row flex-col items-center justify-between mt-5 w-full">
                    <div className="bg-white p-5 lg:mr-10 flex-grow w-full max-h-max drop-shadow-2xl">
                        <h2 className="text-4xl font-extralight">Calcule o valor <br /> do seu carro!</h2>

                        <form className="mt-5">
                            <select className="w-full rounded-md border-[1px] border-primary-color bg-secondary-color text-lg text-primary-color p-2" name="type" id="type">
                                <option>Selecione o tipo</option>
                                <option value="1">carro</option>
                                <option value="2">moto</option>
                                <option value="3">caminhão</option>
                            </select>

                            <select className="mt-3 w-full rounded-md border-[1px] border-primary-color bg-secondary-color text-lg text-primary-color p-2" name="brand" id="brand">
                                <option value="">Selecione a marca</option>
                                <option value="1">carro</option>
                                <option value="2">moto</option>
                                <option value="3">caminhão</option>
                            </select>

                            <select className="mt-3 w-full rounded-md border-[1px] border-primary-color bg-secondary-color text-lg text-primary-color p-2" name="model" id="model">
                                <option>Selecione o modelo</option>
                                <option value="1">carro</option>
                                <option value="2">moto</option>
                                <option value="3">caminhão</option>
                            </select>

                            <select className="mt-3 w-full rounded-md border-[1px] border-primary-color bg-secondary-color text-lg text-primary-color p-2" name="year" id="year">
                                <option>Selecione o ano</option>
                                <option value="1">carro</option>
                                <option value="2">moto</option>
                                <option value="3">caminhão</option>
                            </select>

                            <button className="mt-3 w-full rounded-md bg-primary-color p-2 text-white">Calcular Valor</button>

                        </form>
                    </div>

                    <div className="bg-white p-5 flex-grow w-full max-h-max mt-3 lg:mt-0 drop-shadow-2xl">
                        <h2 className="text-xl md:text-3xl text-primary-color">156 Sport Wagon 2.5 V6 24V 4p Aut. - Gasolina</h2>
                        <p className="mt-6 text-primary-color text-lg">Codigo Tabela Fipe: 801003-0</p>

                        <p className="mt-7 text-xl md:text-3xl font-bold text-primary-color">Preço Médio:</p>
                        <h3 className="text-[43px] xl:text-8xl font-bold text-primary-color">R$ 2.158,00</h3>
                        <p className="text-xs md:text-lg text-primary-color">Ultima Atualização Em Dezembro de 2022</p>
                    
                        <p className="mt-7 text-primary-color text-sm"><strong>Atenção: </strong>Este é um valor para que você possa tomar como base, levando em
                            consideração alguns aspectos de acordo com a tabela Fipe.</p>
                    </div> 
                </div>
            </div>

            <div className="bg-secondary-color">
                <Faq/>
            </div>
        </>
    );
}