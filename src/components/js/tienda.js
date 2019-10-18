import React, { Component } from 'react'
import '../css/tienda.css'
import Encabezado from './Encabezado'
import tienda from '../../assets/Tienda/btnTienda.png'
import PopLightBoxTienda from './PopLightBoxTienda'

export default class Tienda extends Component {
    constructor(props){
        super(props)
        this.state = {
            mp1: this.props.mapa[0][1],
            mp2: this.props.mapa[1][1],
            mp3: this.props.mapa[2][1],
            mp4: this.props.mapa[3][1],
            mp5: this.props.mapa[4][1],
            mp6: this.props.mapa[5][1],
            mp7: this.props.mapa[6][1],
            complet: [],
            temporal: [],
        }
        this.puntos = this.props.puntos
        this.valid = this.props.valid
    }

    componentDidMount(){
        if (this.props.lugar-1==14 || this.props.lugar-1==25 || this.props.lugar-1==32 || this.props.lugar-1==38 || this.props.lugar-1==43) {
            this.setState({complet: []})
        }else {
            this.setState({complet: this.valid})
        }
    }

    componentWillUnmount(){
        this.props.compra(this.state.complet)
    }

    // componentWillUnmount(){
    //     this.props.conti(false)
    // }

    handleStateActual(evt){
        this.setState({temporal: evt})
    }

    handleCompro(evt){
        switch(evt) {
            case 0:
                if (this.state.mp1!='intro11111' && this.puntos>=200) {
                    this.setState({mp1: this.state.mp1+1})
                    this.props.updtMapa(0,this.state.mp1+1,200)
                }
            break;
            case 1:
                if (this.state.mp2!='intro11111' && this.puntos>=200) {
                    this.setState({mp2: this.state.mp2+1})
                    this.props.updtMapa(1,this.state.mp2+1,200)
                }
            break;
            case 2:
                if (this.state.mp3!='intro11111' && this.puntos>=200) {
                    this.setState({mp3: this.state.mp3+1})
                    this.props.updtMapa(2,this.state.mp3+1,200)
                }
            break;
            case 3:
                if (this.state.mp4!='intro11111' && this.puntos>=200) {
                    this.setState({mp4: this.state.mp4+1})
                    this.props.updtMapa(3,this.state.mp4+1,200)
                }
            break;
            case 4:
                if (this.state.mp5!='intro11111' && this.puntos>=100) {
                    if (this.state.mp5==='intro11') {
                        this.setState({mp5: this.state.mp5+11})
                    }else
                        this.setState({mp5: this.state.mp5+1})

                    this.props.updtMapa(4,this.state.mp5+1,100)
                }
            break;
            case 5:
                if (this.state.mp6!='intro11111' && this.puntos>=200) {
                    this.setState({mp6: this.state.mp6+1})
                    this.props.updtMapa(5,this.state.mp6+1,200)
                }
            break;
            case 6:
                if (this.state.mp7!='intro11111' && this.puntos>=100) {
                    if (this.state.mp7==='intro11') {
                        this.setState({mp7: this.state.mp7+11})
                    }else
                        this.setState({mp7: this.state.mp7+1})
                        
                    this.props.updtMapa(6,this.state.mp7+1,100)
                }
            break;
        }
        this.setState({ complet:this.state.complet.concat(evt) })
    }
    
    acceptMethods = (openPopSugerencias) => {
        this.openPopSugerencias = openPopSugerencias;
    };

    render(){
        return(
            <div className="contenedor">
                <Encabezado encabe1="Tienda" />
                <PopLightBoxTienda puntos={this.puntos} valid={this.valid} shareMethods={this.acceptMethods} rnw={this.state.temporal} lugar={this.props.lugar} actual={this.handleStateActual.bind(this)} compro={this.handleCompro.bind(this)} />
                <div className="row parrafo">
                    <p className="textTienda" >Bienvenido a la tienda, acá podrás ir comprando las partes que irán mejorando tu ciudad.</p>
                    <div className="row cityNow">
                        <div className={"mpa mapa0 "+this.state.mp1}></div>
                        <div className={"mpa mapa1 "+this.state.mp2}></div>
                        <div className={"mpa mapa2 "+this.state.mp3}></div>
                        <div className={"mpa mapa3 "+this.state.mp4}></div>
                        <div className={"mpa mapa4 "+this.state.mp5}></div>
                        <div className={"mpa mapa5 "+this.state.mp6}></div>
                        <div className={"mpa mapa6 "+this.state.mp7}></div>
                        <div className="mpa mapa7 intro"></div>
                    </div>
                    <div className="lightTienda"><img src={tienda} onClick={()=>this.openPopSugerencias('Tienda')} className="tiendaOpen"/></div>
                </div>
            </div>
        )
    }
}