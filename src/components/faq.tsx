import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

export function Faq() {
    return(
        <>  
            <div className='w-full'>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="bg-white flex w-full justify-between rounded-t-lg bg-purple-100 p-4 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span className='text-xl text-primary-color'>O que é e como funciona A Tabela Fipe ?</span>
                                <ChevronUpIcon
                                className={`${
                                    open ? 'rotate-180 transform' : ''
                                } h-5 w-5 text-purple-500`}
                                />
                            </Disclosure.Button>
                                <Disclosure.Panel className="bg-white px-4 pt-4 pb-2 text-lg text-gray-500 rounded-b-lg">
                                Por mais que o nome seja conhecido, poucas pessoas sabem exatamente o que é Tabela Fipe. Então, se você adquiriu um carro ou está pensando em vender o seu, é importante entender como ela funciona.
                                <br />
                                <br />
                                Criada em 1973 pela Fundação Instituto de Pesquisas Econômicas (Fipe), o índice é uma ferramenta importante quando se trata de compra e venda de veículos. Isso porque é utilizado como referência para definir os preços de automóveis novos, seminovos e usados em todo o território nacional.
                                <br />
                                <br />
                                A Tabela Fipe também é usada para definir os valores dos impostos, como o IPVA, por exemplo, bem como o valor para fins de indenização de seguros de veículos.
                                <br />
                                <br />
                                Por isso, todos que desejam comprar um veículo ou vender devem acompanhar as notícias sobre a Fipe.
                                Aliás, a análise deveria ser feita muito antes de adquirir um carro novo. Afinal, é uma maneira de analisar o quanto será pago de IPVA, de seguro e por quanto é possível revende-lo. 
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
            
            <div className='mt-7 w-full'>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="bg-white flex w-full justify-between rounded-t-lg bg-purple-100 p-4 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span className='text-xl text-primary-color'>Como os valores médios são encontrados ?</span>
                                <ChevronUpIcon
                                className={`${
                                    open ? 'rotate-180 transform' : ''
                                } h-5 w-5 text-purple-500`}
                                />
                            </Disclosure.Button>
                                <Disclosure.Panel className="bg-white px-4 pt-4 pb-2 text-lg text-gray-500 rounded-b-lg">
                                A Tabela Fipe representa a média nacional de valores, para veículos novos e usados, vendidos mensalmente em todo o Brasil. Por essa razão, é muito utilizada por lojistas, comerciante e vendedores como parâmetro para negociação.
                                <br />
                                <br />
                                O valor da Tabela Fipe é calculado a partir de preços oferecidos em todo o Brasil. No caso de carros zero, o índice considera o preço oferecido por uma versão de entrada, intermediária e topo de linha para o consumidor final com o pagamento à vista, em todo o território nacional.
                                <br />
                                <br />
                                Por exemplo, se no mês da avaliação forem vendidos 2000 carros da marca X e modelo Y com um valor médio de R$ 65.000, esse será o valor da Tabela Fipe referente ao veículo analisado. No mês seguinte, uma nova pesquisa é realizada e o valor da Tabela Fipe é atualizado.
                                <br />
                                <br />
                                No caso dos seminovos e usados, o índice capta diversos preços de anúncios, excluindo valores muito altos ou muito baixos. Com os valores que restaram, aqueles que são próximos, é feita uma média para definir qual será o valor a ser incluído na tabela.
                                <br />
                                <br />
                                É importante ressaltar que o valor da Tabela Fipe não leva em conta a cor do automóvel nem a presença de acessórios. Além disso, não é o ano de fabricação, mas o ano do modelo que é considerado na Fipe.
                                <br />
                                <br />
                                Vale lembrar que os preços reais variam de acordo com a região, a conservação do veículo, acessórios e até a cor. Por isso, a Tabela Fipe serve apenas como um parâmetro para chegar a um valor justo na negociação.
                                <br />
                                <br />
                                <strong>Quando usar a Tabela Fipe?</strong>
                                <br />
                                <br />
                                Além de oferecer a possibilidade de consultar preços dos mais diversos veículos para comprar um modelo, a Tabela Fipe também pode ser uma ótima ferramenta para quem está pensando em vender um veículo.
                                <br />
                                <br />
                                Isso porque, a partir das informações da Fipe, é possível fazer uma avaliação do automóvel em relação ao mercado. Porém, além do valor da tabela, é importante levar em consideração outros fatores como a quilometragem rodada, os itens de série, revisões realizadas, entre outras especificidades.
                                <br />
                                <br />
                                O valor da Tabela Fipe também é usado como parâmetro para o cálculo de valores do IPVA e de indenização do seguro dos automóveis.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>

            <div className='mt-7 w-full'>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="bg-white flex w-full justify-between rounded-t-lg bg-purple-100 p-4 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span className='text-xl text-primary-color'>Como a tabela é construída ?</span>
                                <ChevronUpIcon
                                className={`${
                                    open ? 'rotate-180 transform' : ''
                                } h-5 w-5 text-purple-500`}
                                />
                            </Disclosure.Button>
                                <Disclosure.Panel className="bg-white px-4 pt-4 pb-2 text-lg text-gray-500 rounded-b-lg">
                                Mensalmente, a Fipe coleta os dados sobre diferentes veículos, como carros, motos e caminhões, novos e usados, no mercado nacional.
                                <br />
                                <br />
                                Após a coleta, são excluídos os preços muito acima ou muito abaixo da média. Também não são avaliados os táxis, veículos de frota, viaturas e outros que não se enquadrem no uso comum.
                                <br />
                                <br />
                                A Tabela Fipe também não leva em conta a cor do veículo e a presença de acessórios. Por fim, vale lembrar que não é o ano de fabricação, mas o ano do modelo que é considerado.
                                <br />
                                <br />
                                A partir desses dados, cada modelo de veículo recebe uma avaliação, que definirá o valor na Tabela Fipe. Hoje, o índice é a principal referência para lojistas, comerciante e vendedores.
                                <br />
                                <br />
                                Porém, no caso de venda de automóveis, é importante usar o índice como um parâmetro, mas considerar outros fatores também. Afinal, o veículo pode conter acessórios e adicionais que o valorizam, por exemplo.
                                <br />
                                <br />
                                Como visto, a Tabela Fipe tem muitas utilidades. E, embora não seja um instrumento obrigatório, é muito utilizada na formação de valores de veículos. Por isso, vale a pena acompanhar os valores divulgados mensalmente.
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </>
    );
}