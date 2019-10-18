import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import ciudad from '../../../assets/Elements/ciudad7.png'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.audio(true,627,664)
    }

    render(){
        return(
            <div className="contenedor">
                <Encabezado encabe1="Las personas que habitan la ciudad de Kimberly-Clark"/>
                <div className="row parraf">
                    <p className="text"><span stlye={asomb}>¡Asombroso!</span> Después de lograr transformar el espacio que recibiste en una ciudad innovadora y segura, las personas comenzaron a llegar.</p>
                    <div className="row">
                        <div className="col-8">
                            <img className="ciud" src={ciudad} alt="i" width="120%"/>
                        </div>
                        <div className="col">
                            <p className="text"><span style={style}>¡Definitivamente, el cambio lo hacemos las personas! </span></p>
                            <p className="text">Todas las nociones que te entregamos hasta el momento no tendrían sentido si las personas como tú o como nosotros no las practicaran.</p>
                            <p className="text">Por eso, practícalas y ayúdanos a mantener la seguridad en esta ciudad y en cada una de las instalaciones de la empresa Kimberly-Clark.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const style = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#4080C0',
    textAlign: 'center',
    position: 'relative',
    display: 'flex',
}

const asomb = {
    position: 'relative',
    color: '#4080C0',
    fontWeight: 'bold',
}