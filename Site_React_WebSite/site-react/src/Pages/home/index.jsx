import { Footer } from '../../components/Footer';
import { Main1 } from '../../components/Main1';

export function Home() {
    return (
        <div id="home">
            <div className="container">


                <div className="container2">
                    <div className="background">
                    </div>

                    <div className="banner">
                        <img src={img} alt="BANNER Startup VOEx" />
                    </div>

                    <div className="botao-content">
                        <a href="index2.html"><button className="botao" >Montar Viagem</button></a>
                    </div>

                </div>


            </div>
        </div>
    )
}