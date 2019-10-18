import React, { Component } from 'react';
import coin from '../../assets/coin.png'
import PopLightBox from './PopLightBox'

export default class textInfo extends Component {
    constructor(props){
        super(props)
        this.puntos =  this.props.puntos
    }
    
    acceptMethods = (openPopSugerencias) => {
        this.openPopSugerencias = openPopSugerencias;
    };

    handlePuntos(){
        this.props.callback(this.puntos + 200);
    }

    render(){
        switch (this.props.caso) {
        case 1:
            if (this.props.popSuge=='') 
                this.mond1 = <img className="coin7" type={this.props.type} onClick={() => {this.handlePuntos()}} src={coin} width="20%" height="100%"/>
            else
                this.mond1 = <img className="coin7" type={this.props.type} onClick={() => {this.openPopSugerencias(this.props.popSuge); this.handlePuntos()}} src={coin} width="20%" height="100%"/>
            break;
        case 2:
            if (this.props.popSuge=='') 
                this.mond2 = <img className="coin7" type={this.props.type} onClick={() => {this.handlePuntos()}} src={coin} width="20%" height="100%"/>
            else
                this.mond2 = <img className="coin7" type={this.props.type} onClick={() => {this.openPopSugerencias(this.props.popSuge); this.handlePuntos()}} src={coin} width="20%" height="100%"/>
            break;
        default:
            this.mond1 = null
            this.mond2 = null
            break;
        }
        
        if (this.props.stle=='eu') {
            this.estilo = style2
        }else {
            this.estilo = style
        }
        return(
            <div className="col" style={this.estilo}>
                <PopLightBox shareMethods={this.acceptMethods} flechas=''/>
                {this.mond1}
                <p style={textI}>{this.props.infoDwn}</p>
                {this.mond2}
            </div>
        )
    }
}

const style = {
    position: 'relative',
    maxWidth: '580px',
    // height: '80px',
    display: 'inline-flex',
    color: '#808080',
    fontStyle: 'italic',
    margin: '0 auto',
    zIndex: 99,
    top: 5,
}

const textI = {
    fontStyle: 'italic',
    position: 'relative',
    // padding: '10px',
    fontSize: '19px',
    margin: '0 auto',
}

const style2 = {
    position: 'relative',
    maxWidth: '580px',
    display: 'inline-flex',
    color: 'rgb(128, 128, 128)',
    fontStyle: 'italic',
    margin: '0px auto',
    zIndex: '99',
    top: '-32px',
}