import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import ciudad from '../../../assets/Elements/ciudad5.png'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.audio(true,524,557.5)
    }

    render(){
        return(
            <div className="contenedor">
                <Encabezado encabe1="Quinto elemento: Señalización en la ciudad Kimberly-Clark"/>
                <div className="row parraf">
                    <p className="text">¡Vaya! Que bonita está la ciudad ahora que has definido las rutas de acceso y desplazamiento de peatones y vehículos. </p>
                    <div className="row">
                        <div className="col-8">
                            <img className="ciud" src={ciudad} alt="i" width="120%"/>
                        </div>
                        <div className="col">
                            <p className="text">¿Sabes cómo mantener limpios estos espacios y mantener la calidad de los productos de Kimberly-Clark?</p>
                            <p className="text">No te preocupes, te mostraremos cómo se logra mantener la calidad y la limpieza en las instalaciones de Kimberly-Clark.</p>
                            <p className="text">¡Toma atenta nota de las siguientes nociones de aprendizaje!</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}