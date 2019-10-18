import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import '../../css/Segundo/mod2-6.css'
import coin from '../../../assets/coin.png'
import PopLightBox from '../PopLightBox'
import Acci from '../../../assets/Elements/Acci.png'
import Emer from '../../../assets/Elements/Emer.png'
import Evac from '../../../assets/Elements/Evac.png'
import aud from '../../../assets/hombre.mp3'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            avail: 0,
            flecha: 1
        }
        this.flecha = 1
        this.puntos = this.props.puntos
        
        this.song = new Audio(aud)
        this.ini = 331
        this.fin = 337

        this.song.currentTime=this.ini
        this.song.play()
        setInterval(()=>{
            if (this.song.currentTime==this.song.duration) {
                this.song.stop()
            }else if (this.song.currentTime>this.fin) {
                this.song.pause()
                if (this.fin!=null) {
                    this.setState({conti: true})
                }
            }
        },1000)
    }

    componentDidMount(){
        this.props.audio(null,null,null)
    }

    acceptMethods = (openPopSugerencias) => {
        this.openPopSugerencias = openPopSugerencias;
    };

    handlePuntos(){
        this.props.callback(this.puntos + 300);
    }

    handleAva(){
        const {avail} = this.state
        this.setState({ avail: avail+1 })
    }

    screenPop(e){
        // const {flecha} = this.state
        if (e=='fLeft') {
            // this.setState({flecha: flecha+1})
            this.flecha = this.flecha+1
            this.openPopSugerencias('Evac'+this.flecha)
        }else if(e=='fRight') {
            // this.setState({flecha: flecha-1})
            this.flecha = this.flecha-1
            this.openPopSugerencias('Evac'+this.flecha)
        }else
            this.openPopSugerencias('Evac'+this.flecha)
    }

    render(){
        // const {flecha} = this.state
        const {avail} = this.state
        if (avail>=3) {
            this.mond = <img className="coin6" onClick={() => {this.handlePuntos(); this.setState({ avail: avail+1 })}} src={coin} alt="i" width="15%" height="100%"/>
        }else{
            this.mond = null
        }

        if (avail===4) {
            this.props.audio(true,null,0)            
        }

        return(
            <div className="contenedor">
                <Encabezado encabe1="En caso de accidentes, emergencias o evacuaciones "/>
                <div className="contexto6">
                    <PopLightBox shareMethods={this.acceptMethods} flechas={this.flecha} screenPop={this.screenPop.bind(this)} />
                    <p className="text">A veces no alcanzamos a considerar los peligros, riesgos o amenazas a las cuales estamos expuestos, por eso las nociones que te presentamos a continuación son tan importantes para tu vida, al igual que la forma cómo reaccionas ante un accidente, una emergencia o una evacuación</p>
                    <p className="textN TextA">¡Cuídate!</p>
                    <p className="text unic">Teniendo en cuenta los siguientes procedimientos:</p>
                    <div className="row cuidate">
                        <div className="col Acci"><img src={Acci} className="Acci" onClick={() => {this.openPopSugerencias('Acci'); this.handleAva()}} /></div>
                        <div className="col Emer"><img src={Emer} className="Emer" onClick={() => {this.openPopSugerencias('Emer'); this.handleAva()}} /></div>
                        <div className="col Evac"><img src={Evac} className="Evac" onClick={() => {this.screenPop(); this.handleAva()}} /></div>
                    </div>
                    <div className="col Dwn6">
                        {this.mond}
                        <p className="textI">Haz clic en cada botón y recuerda recoger tu Punto K.</p>
                    </div>
                </div>
            </div>
        )
    }
}