import './style.css';
import imgLogo from '../../assets/img/place-company.png';

export function SectionValues(){
    return(
             <section id="values">
                    <h2>Quem é a Imobiliaria UniMater</h2>

                    <div className="values-container">
                        <img src={imgLogo} alt="Foto da" />


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
    )
}