import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import '../../css/Primero/mod1.css'
import ciudad from '../../../assets/Elements/ciudad.png'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.audio(true, 209, 257.5)
    }

    // componentWillUnmount(){
    //     this.props.audio('shutUp')
    // }

    render(){
        return(
            <div className="contenedor">
                <Encabezado encabe1="Primer elemento: los cimientos de la Ciudad Kimberly-Clark" />
                <div className="row parraf">
                    <p className="text">Esta base representa los cimientos sobre los que construirás, aquellos que sustentan la estructura de la ciudad, garantizando la estabilidad y evitando los daños.</p>
                    <p className="textN">¿Sabes cuál es el cimiento en la empresa Kimberly-Clark para transformar con bienestar la vida de sus empleados, contratistas y visitantes?</p>
                    <div className="row">
                        <div className="col-7">
                            <img className="ciud" src={ciudad} alt="i" width="130%"/>
                        </div>
                        <div className="col leftText">
                            <p className="text">Es el Sistema de Gestión de Seguridad, Salud, Medio Ambiente y Calidad; con este, se desarrollan actividades de promoción, prevención y control de riesgos e impactos, para mantener y proteger el ambiente, la salud de los trabajadores y cumplir los niveles de calidad que requieren nuestros productos.</p>
                        </div>
                            <p className="text comencemos">¡Comencemos!</p>
                    </div>
                </div>
            </div>
        )
    }
}