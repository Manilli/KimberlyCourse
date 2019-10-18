import React, { Component } from 'react';
import '../css/encabezado.css'

export default class Encabezado extends Component {
    constructor(props){
        super(props)
    }
    render(){

        if (this.props.camb===null||this.props.camb===""||this.props.camb===undefined)
            this.camb = ''
        else
            this.camb = this.props.camb

        return(
            <div>
                <div className={"row instruccion"+this.camb}>
                    <p className="text">{this.props.encabe1}</p>
                    <p className="text">{this.props.encabe2}</p>
                </div>
                <div className="row linea">
                    <div className={"line"+this.camb}></div>
                </div>
            </div>
        )
    }
}