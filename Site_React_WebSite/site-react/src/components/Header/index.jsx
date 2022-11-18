
import '../../assets/img/voeX.png';
import 'style.css';


export function Home() {
    return (
        <header>
            <div class="container">
                <div class="brand">
                    <a href="index.html"><img src="../CSS/img/voe-removebg-preview (1).png" alt="Logo Startup VOEx"/></a>

                    <input type="text" placeholder="&#xF002; Pesquisar ..." style="font-family: Arial, 'Font Awesome 5 Free'" />

                </div>

                <nav>
                    <ul>
                        <li>
                            <a href="#" class="active">Home</a>
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