import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import '../../css/Segundo/mod2.css'
import ciudad from '../../../assets/Elements/ciudad2.png'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.audio(true, 283, 321.5)
    }

    render(){
        return(
            <div className="contenedor">
                <Encabezado encabe1="Segundo elemento: el plano de la ciudad segura de Kimberly-Clark" />
                <div className="row parraf">
                    <p className="text">¡Muy bien! Has logrado avanzar en la construcción de este espacio y gracias a tu avance, ahora tienes el plano de la ciudad Kimberly-Clark. ¿Qué observas en él?, seguro has descubierto que este plano está dividido por zonas, tiene marcadas las calles y la ubicación de los edificios.</p>
                    <div className="row">
                        <div className="col segMod">
                            <p className="text fndA">¿Qué tiene que ver ese plano con nuestro Sistema de Gestión de Seguridad, Salud y Medio Ambiente?</p>
                            <p className="textN textoA">¡Descúbrelo en la próxima pantalla!</p>
                        </div>
                        <div className="col-8">
                            <img className="ciud2" src={ciudad} alt="i" width="120%"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}