import './style.css';

export function HomePage() {
    return (
        <div id="home-page">
            <div className="container">
                <section id="banner">
                    <div className="banner-content">
                        <div>
                            <h1>Lugar exato para você realizar o seus sonhos</h1>
                            <h3>Nós oferecemos um serviço completo de venda, locação e compra</h3>
                        </div>
                    </div>

                    <div className="banner-filter">
                        <div className="filter-fields">
                            <form>
                                <select>
                                    <option value="venda">Venda</option>
                                    <option value="locacao">Locação</option>
                                </select>

                                <select>
                                    <option>Tipo de Imóvel</option>
                                    <option value="apartamento">Apertamento</option>
                                    <option value="casa">Casa</option>
                                    <option value="sobrado">Sobrado</option>
                                    <option value="terreno">Terreno</option>
                                </select>

                                <select>
                                    <option>Cidade</option>
                                    <option value="coronel vivida">Coronel Vivida</option>
                                    <option value="francisco beltrao">Francisco Beltrao</option>
                                    <option value="pato branco">Pato Branco</option>
                                    <option value="saudade do iguaçu">Saudade do Iguaçu</option>
                                </select>

                                <select>
                                    <option>Bairro</option>
                                    <option value="brasilia">Brasilia</option>
                                    <option value="centro">Centro</option>
                                    <option value="la salle">La salle</option>
                                    <option value="pinheiros">Pinheiros</option>
                                </select>
                            </form>
                        </div>

                        <div className="filter-result">
                            <p className="result-value">26</p>
                            <p className="result-label">Imóveis</p>
                            <button>Filtrar</button>
                        </div>
                    </div>
                </section>

                <section id="cards">
                    <h2>Imóveis disponíveis</h2>
                    <div className="cards-content">
                        <div className="card">
                            <img src="./assets/img/thumb1.png" alt="Casa 1" />
                            <div className="card-content">

                                <h4>reprehenderit minima at quibusdam earum! Voluptatibus quam esse voluptas ad, cupiditate
                                    laborum magnam
                                    aperiam! Nobis, dolorum!</h4>

                                <p> expedita modi laborum eius accusamus vel. Omnis odio ipsam ex natus earum voluptatum
                                    quam dolores?</p>

                                <div className="card-price">
                                    <p>R$ 900.000,00</p>
                                </div>

                            </div>
                        </div>

                        <div className="card">
                            <img src="./assets/img/thumb1.png" alt="Casa 2" />
                            <div className="card-content">

                                <h4>reprehenderit minima at quibusdam earum! Voluptatibus quam esse voluptas ad, cupiditate
                                    laborum magnam
                                    aperiam! Nobis, dolorum!</h4>

                                <p> expedita modi laborum eius accusamus vel. Omnis odio ipsam ex natus earum voluptatum
                                    quam dolores?</p>
                                <div className="card-price">
                                    <p>R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src="./assets/img/thumb1.png" alt="Casa 3" />
                            <div className="card-content">

                                <h4>reprehenderit minima at quibusdam earum! Voluptatibus quam esse voluptas ad, cupiditate
                                    laborum magnam
                                    aperiam! Nobis, dolorum!</h4>

                                <p> expedita modi laborum eius accusamus vel. Omnis odio ipsam ex natus earum voluptatum
                                    quam dolores?</p>
                                <div className="card-price">
                                    <p>R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src="./assets/img/thumb1.png" alt="Casa 4" />
                            <div className="card-content">

                                <h4>reprehenderit minima at quibusdam earum! Voluptatibus quam esse voluptas ad, cupiditate
                                    laborum magnam
                                    aperiam! Nobis, dolorum!</h4>

                                <p> expedita modi laborum eius accusamus vel. Omnis odio ipsam ex natus earum voluptatum
                                    quam dolores?</p>
                                <div className="card-price">
                                    <p>R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src="./assets/img/thumb1.png" alt="Casa 5" />
                            <div className="card-content">

                                <h4>reprehenderit minima at quibusdam earum! Voluptatibus quam esse voluptas ad, cupiditate
                                    laborum magnam</h4>

                                <p> expedita modi laborum eius accusamus vel. Omnis odio ipsam ex natus earum voluptatum
                                    quam dolores?</p>
                                <div className="card-price">
                                    <p>R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <img src="./assets/img/thumb1.png" alt="Casa 6" />
                            <div className="card-content">

                                <h4>reprehenderit minima at quibusdam earum! Voluptatibus quam esse voluptas ad, cupiditate
                                    laborum magnam
                                    aperiam! Nobis, dolorum!</h4>

                                <p> expedita modi laborum eius accusamus vel. Omnis odio ipsam ex natus earum voluptatum
                                    quam dolores?</p>
                                <div className="card-price">
                                    <p>R$ 900.000,00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="reasons">
                    <h2>Por que nos escolher?</h2>
                    <div className="reasons-content">
                        <div className="reason">
                            <p className="reason-value">+1000 </p>
                            <p className="reason-label">Imóveis</p>
                        </div>

                        <div className="reason">
                            <p className="reason-value">+500 </p>
                            <p className="reason-label">Clientes Felizes</p>
                        </div>

                        <div className="reason">
                            <p className="reason-value">+50 </p>
                            <p className="reason-label">Premiações</p>
                        </div>

                        <div className="reason">
                            <p className="reason-value">+100 </p>
                            <p className="reason-label">Especialistas</p>
                        </div>
                    </div>
                </section>

                <section id="specialists">
                    <h2>Converse com um Especialista</h2>
                    <div className="specialists-content">
                        <div className="specialist">
                            <h5>Tutu Williams</h5>
                            <p>London</p>
                            <p className="specialist-detail">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                                necessitatibus voluptas provident neque vero eligendi debitis molestiae consequatur? Eos
                                natus labore quam aliquid maiores nemo quaerat pariatur laborum in quas. </p>
                        </div>

                        <div className="specialist">
                            <h5>Mark Zion</h5>
                            <p>New York City</p>
                            <p className="specialist-detail">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                                necessitatibus voluptas provident neque vero eligendi debitis molestiae consequatur? Eos
                                natus labore quam aliquid maiores nemo quaerat pariatur laborum in quas. </p>
                        </div>

                        <div className="specialist">
                            <h5>Essien Crest</h5>
                            <p>Berlin
                            </p>
                            <p className="specialist-detail">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                                necessitatibus voluptas provident neque vero eligendi debitis molestiae consequatur? Eos
                                natus labore quam aliquid maiores nemo quaerat pariatur laborum in quas. </p>
                        </div>
                    </div>

                </section>

                <section id="values">
                    <h2>Quem é a Imobiliaria UniMater</h2>

                    <div className="values-container">
                        <img src="./assets/img/place-company.png" alt="Foto da" />


                        <div className="values-content">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus pariatur autem voluptatem,
                                excepturi magni ad dolorum adipisci illo reprehenderit, aliquid corrupti expedita quidem
                                blanditiis. Impedit illum consequatur iure reiciendis dolor.</p>

                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis sequi officia dolorem
                                veritatis sed atque impedit tempore perferendis iusto? Error possimus quas nemo consequatur
                                excepturi numquam eos ea enim? In!</p>

                            <div className="value-detail">
                                <div className="value">
                                    <span>Alto Padrão</span>
                                    <span>Agilidade</span>
                                </div>

                                <div className="value">
                                    <span>Facilidade</span>
                                    <span>Confiabilidade</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}