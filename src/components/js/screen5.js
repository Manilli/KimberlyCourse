import React, { Component } from 'react';
import Encabezado from './Encabezado'
import reto from '../../assets/Elements/reto.png'

export default class Screen2 extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.audio(true,157,201)
    }

    // componentWillUnmount(){
    //     this.props.audio('shutUp')
    // }

    render(){
        return(
            <div className="contenedor">
                <Encabezado encabe1="Tu reto en este curso" />
                <div className="gnal">
                    <img src={reto} alt="i" width="92%" height="98%" />
                </div>
            </div>
        )
    }
}