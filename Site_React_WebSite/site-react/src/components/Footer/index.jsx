import './style.css';

export function Footer() {
    return (
        <footer>
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
        </footer>
    )
}