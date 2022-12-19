export function Home() {
    return(
        <div className="bg-primary-color py-5 px-20">
            <div className="flex flex-row items-center">
                <img src="./assets/images/car-logo.svg" alt="car-logo" className="w-[90px]"/>
                <span className="text-2xl font-semibold text-white mt-3 ml-2">QUANTO VALE <br /> MEU CARRO</span>
            </div>

            <div className="flex flex-row items-center justify-between">
                <div className="bg-white">
                    1
                </div>

                <div className="bg-white">
                    2
                </div>
            </div>
        </div>
    );
}