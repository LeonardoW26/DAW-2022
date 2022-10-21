import './style.css';

export function SectionBanner() {
    return(
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
    )
}