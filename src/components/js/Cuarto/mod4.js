import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import '../../css/Cuarto/mod4.css'
import ciudad from '../../../assets/Elements/ciudad4.png'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.audio(true,439,492.5)
    }

    componentWillMount(){
        this.props.audio(true,439,492.5)
    }

    render(){
        return(
            <div className="contenedor">
                <Encabezado encabe1="Cuarto elemento: las ventanas y mampostería de los edificios"
                            encabe2="en la ciudad Kimberly-Clark" />
                <div className="row parraf">
                    <p className="text">Que bonita ciudad la que has construido con tu esfuerzo y dedicación. Si pones el mismo empeño a las tareas que realizas en las instalaciones de Kimberly-Clark, seguro lograrás mantener el control de seguridad en las actividades que adelantes.</p>
                    {/* <p className="textN">¿Sabes cuál es el cimiento en la empresa Kimberly-Clark para transformar con bienestar la vida de sus empleados, contratistas y visitantes?</p> */}
                    <div className="row">
                        <div className="col-6">
                            <img className="ciud" src={ciudad} alt="i" width="140%"/>
                        </div>
                        <div className="col leftText">
                            <p className="text">En esta oportunidad has logrado que los edificios tengan ventanas y que su mampostería tenga un sentido. ¿Qué aprenderás en esta unidad de conocimiento? Conocerás la importancia que tiene la apariencia de los productos químicos que ingresan a las plantas. Ten presente que la vista es quizás el sentido humano de mayor relevancia porque nos permite detectar los peligros y prevenir los riesgos a los cuales nos encontramos expuestos.</p>
                        </div>
                            {/* <p className="text comencemos">¡Comencemos!</p> */}
                    </div>
                </div>
            </div>
        )
    }
}