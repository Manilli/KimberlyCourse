import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import ciudad from '../../../assets/Elements/ciudad6.png'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.audio(true,576,607)
    }

    render(){
        return(
            <div className="contenedor">
                <Encabezado encabe1="Sexto elemento: el urbanismo en la ciudad Kimberly-Clark"/>
                <div className="row parraf">
                    <p className="text">¡Vaya! Que bonita está la ciudad ahora que has definido las rutas de acceso y desplazamiento de peatones y vehículos. </p>
                    <div className="row">
                        <div className="col-7">
                            <img className="ciud" src={ciudad} alt="i" width="130%"/>
                        </div>
                        <div className="col leftText">
                            <p className="text"><span style={style}>¡Muy bien!</span></p>
                            <p className="text">Con todos esos Puntos K lograste adquirir el urbanismo para la ciudad, de una manera honesta y rentable.</p>
                            <p className="text">La honestidad en Kimberly-Clark es un valor que se cuida y protege, ¿cómo lo hacemos? Garantizando que las personas que laboran con nosotros son confiables y que los procesos que realizamos son transparentes. </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const style = {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#4080C0',
}