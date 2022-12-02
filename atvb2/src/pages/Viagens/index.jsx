import './style.css';

import img from '../../assets/img/Foz.png';
import img1 from '../../assets/img/Recanto.webp';
import img2 from '../../assets/img/curitiba.webp';
import img3 from '../../assets/img/hermann.jpg';
import img4 from '../../assets/img/divisor.jpg';
import img5 from '../../assets/img/salto.jpg';
import img6 from '../../assets/img/Salvador.jpg';
import img7 from '../../assets/img/carlos.webp';
import img8 from '../../assets/img/saopaulo.jpg';

import img9 from '../../assets/img/voeX.png';

export function ViagensPage() {
    return (
        <div className="viagens-page">
            <main>
            <div className="container">
                <h3>Match de rotas para você:</h3>

                <div className="cards"
                
                >
                    <div className="card">
                        <p>Foz do Iguaçu, PR</p>
                        <img src={img} alt="Imagem de Foz" />
                    </div>

                    <div className="card">
                        <p>Recanto das Cachoeiras, PR</p>
                        <img src={img1} alt="Imagem do Recanto" />
                    </div>

                    <div className="card">
                        <p>Curitiba, PR</p>
                        <img src={img2} alt="Imagem de CuritibaNelson" />
                    </div>

                    <div className="card">
                        <p>Cachoeira do Hermann, PR</p>
                        <img src={img3} alt="Imagem de Hermann" />
                    </div>

                    <div className="card">
                        <p>Morro do Divisor, PR</p>
                        <img src={img4} alt="Imagem do divisor" />
                    </div>

                    <div className="card">
                        <p>Salto São Francisco, PR</p>
                        <img src={img5} alt="Imagem de Salto" />
                    </div>

                    <div className="card">
                        <p>Salvador, BA</p>
                        <img src={img6} alt="Imagem de Salvador" />
                    </div>

                    <div className="card">
                        <p>Carlos Botelho, SP</p>
                        <img src={img7} alt="Imagem de Carlos" />
                    </div>

                    <div className="card">
                        <p>São Paulo, SP</p>
                        <img src={img8} alt="Imagem de SP" />
                    </div>
                </div>
                

            </div >
            </main>
            <div className="footer-viagens">
                <footer>
                    <div className="container">
                        <div className="footer-content">
                            <div className="footer-company">

                                <div className="imgFooter">
                                    <img src={img9} alt="Logo" />
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
                </footer>
            </div>
        </div>

    )
}