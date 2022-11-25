import imgLogo from '../../assets/img/voeX.png';
import './style.css';


export function Header() {
    return (
        <header>
            <div className="container">
                <div className="brand">
                    <a href="index.html"><img src={imgLogo} alt="Logo Startup VOEx"/></a>

                    <input type="text" placeholder="&#xF002; Pesquisar ..." style="font-family: Arial, 'Font Awesome 5 Free'" />

                </div>

                <nav>
                    <ul>
                        <li>
                            <a href="#" className="active">Home</a>
                        </li>

                        <li>
                            <a href="#">Sobre nós</a>
                        </li>

                        <li>
                            <a href="#">Viagens</a>
                        </li>

                        <li>
                            <a href="#">Planejamento</a>
                        </li>

                        <li>
                            <a href="#">Perfil</a>
                        </li>

                    </ul>
                </nav>

            </div>
        </header>
    )
}