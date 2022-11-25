import './style.css';

import img from '../../assets/img/Foz.png';

export function ViagensPage() {
    return (
        <div className="viagens-page">
            <div className="container">
                <h1>Match de rotas para você:</h1>

                <div className="cards">
                    <div className="card">
                        <p>Foz do Iguaçu, PR</p>
                        <img src={img} alt="Imagem de Foz" />
                    </div>

                    <div className="card">
                        <p>Recanto das Cachoeiras, PR</p>
                        <img src="../CSS/img/Recanto.webp" alt="Imagem do Recanto" />
                    </div>

                    <div className="card">
                        <p>Curitiba, PR</p>
                        <img src="../CSS/img/curitiba.webp" alt="Imagem de CuritibaNelson" />
                    </div>

                    <div className="card">
                        <p>Cachoeira do Hermann, PR</p>
                        <img src="../CSS/img/hermann.jpg" alt="Imagem de Hermann" />
                    </div>

                    <div className="card">
                        <p>Morro do Divisor, PR</p>
                        <img src="../CSS/img/divisor.jpg" alt="Imagem do divisor" />
                    </div>

                    <div className="card">
                        <p>Salto São Francisco, PR</p>
                        <img src="../CSS/img/salto.jpg" alt="Imagem de Salto" />
                    </div>

                    <div className="card">
                        <p>Salvador, BA</p>
                        <img src="../CSS/img/Salvador.jpg" alt="Imagem de Salvador" />
                    </div>

                    <div className="card">
                        <p>Carlos Botelho, SP</p>
                        <img src="../CSS/img/carlos.webp" alt="Imagem de Carlos" />
                    </div>

                    <div className="card">
                        <p>São Paulo, SP</p>
                        <img src="../CSS/img/saopaulo.jpg" alt="Imagem de SP" />
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-company">

                            <div className="imgFooter">
                                <img src="../CSS/img/voe-removebg-preview (1).png" alt="Logo" />
                            </div>

                            <div className="footer-menu">
                                <ul>
                                    <li><a href="#">Sobre nós</a></li>
                                    <li><a href="#">Especialistas</a></li>
                                    <li><a href="#">Missão e Visão</a></li>
                                    <li><a href="#">Nossos Valores</a></li>
                                </ul>
                            </div>

                            <div className="footer-social">
                                <span className="Facebook"></span>
                                <span className="Twitter"></span>
                                <span className="Instagram"></span>
                                <span className="Linkedin"></span>
                            </div>

                            <p className="footer-copyright">
                                &#169; 2022 - Todos os direitos reservados
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}