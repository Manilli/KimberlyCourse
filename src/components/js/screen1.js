import React, {Component} from 'react';
import './../css/screen1.css';
import Texto from "../../assets/Elements/comencemos.png";
import persona from "../../assets/Photos/persona1.png";
import Encabezado from "./Encabezado";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount(){
        this.props.audio(true,6.5,47)
    }

    // componentWillUnmount(){
    //     this.props.audio()
    // }

    render() {
        return (
            <div className="App">
               <div className="containe">
                    <Encabezado encabe1="¡Hoy tienes una oportunidad para mejorar tu bienestar, el medio" encabe2="ambiente y la calidad de los productos Kimberly!"/>
                    <div className="row contenido">
                        <div className="col parraf">
                            <div className="row">
                                <p className="text txt1"> {/* <span className="bold">¡Hola! </span> */} Que bueno que estás iniciando este curso sobre el Sistema de Gestión de Seguridad, Salud en el Trabajo y Medio Ambiente de Kimberly-Clark.</p>
                                <p className="text txt2">En el día de hoy podrás conocer la importancia que tienen estas recomendaciones de bienestar para ti y para el fortalecimiento de nuestra cultura empresarial: Kimberly-Clark; además, con la práctica de ellas podrás construir una mejor realidad para todos, desde el cuidado de la seguridad, la salud, el medio ambiente y la calidad de los productos.</p>
                            </div>
                            <div className="row">
                                <div className="feeter">
                                    <img src={Texto} width="100%" alt="" className="feet"/>
                                </div>
                            </div>
                        </div>
                        <div className="col persona">
                            <img src={persona} width="100%" alt="" />
                        </div>
                    </div>
               </div>
            </div>
        );
    }
}
