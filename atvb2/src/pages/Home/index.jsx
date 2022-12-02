import img from '../../assets/img/voeX.png';
import './style.css';

export function HomePage() {
    return (
        <div id="home">
            <div className="container">

                <div className="banner">
                    <img src={img} alt="BANNER Startup VOEx" />
                </div>

                <div className="botao-content">
                    <a href="/viagens" className="botao" >Montar Viagem</a>
                </div>


            </div>
        </div>
    )
}