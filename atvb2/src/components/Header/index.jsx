import {useLocation} from 'react-router-dom'
import imgLogo from '../../assets/img/voeX.png';
import './style.css';


export function Header() {

    const location = useLocation();

    return (
        <header>
            <div className="container">
                <div className="brand">
                    <a href="/">
                        <img src={imgLogo} alt="Logo Startup VOEx"/>
                    </a>

                </div>

                <nav>
                    <ul>
                        <li>
                            <a href="/" className={location.pathname == '/' && 'active'}>Home</a>
                        </li>

                        <li>
                            <a href="#"  className={location.pathname == '/sobre' && 'active'}>Sobre nós</a>
                        </li>

                        <li>
                            <a href="/viagens" className={location.pathname == '/viagens' && 'active'}>Viagens</a>
                        </li>

                        <li>
                            <a href="#" className={location.pathname == '/planejamento' && 'active'}>Planejamento</a>
                        </li>

                        <li>
                            <a href="#" className={location.pathname == '/active' && 'active'}>Perfil</a>
                        </li>

                    </ul>
                </nav>

            </div>
        </header>
    )
}