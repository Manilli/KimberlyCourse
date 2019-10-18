import React, { Component } from 'react'
import '../../css/Tercero/mod3-4.css'
import PopLightBox from '../PopLightBox'
import Encabezado from '../Encabezado'
import coin from '../../../assets/coin.png'
// import InfoDown from '../textDown'
import aud from '../../../assets/hombre.mp3'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            avail: 0,
        }
        this.puntos = this.props.puntos
        this.song = new Audio(aud)
        this.ini = 421.5
        this.fin = 428

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
        this.props.callback(this.puntos + 400);
        this.setState({ avail: this.state.avail+1 })
    }

    handleAva(){
        const {avail} = this.state
        this.setState({ avail: avail+1 })
    }

    render(){

        const {avail} = this.state
        if (avail>=3) {
            this.mond = <img className="coin7" onClick={() => {this.handlePuntos()}} src={coin} width="15%" height="100%"/>
        }else{
            this.mond = null
        }

        if (avail===4) {
            this.props.audio(true,null,0)
        }

        return(
            <div className="contenedor">
                <Encabezado encabe1="¡Atención, esto es serio!"/>
                <div className="row contexto1">
                    <PopLightBox shareMethods={this.acceptMethods}/>
                    <div className="row">
                        <p className="text vista">¿Quieres obtener el carné que te identifique como contratista y te permita realizar Tareas de Alto Riesgo?</p> 
                        <p className="text vista">¡Este carné es la llave para ingresar a la ciudad Kimberly-Clark! Si quieres obtenerlo debes realizar la siguiente suma de pasos:</p>
                    </div>
                    <div className="row">
                        <div className="suma">
                            <p className="num" onClick={() => {this.openPopSugerencias('uno'); this.handleAva()}} >1</p>
                            <p className="num" onClick={() => {this.openPopSugerencias('dos'); this.handleAva()}} >2</p>
                            <p className="num" onClick={() => {this.openPopSugerencias('tres'); this.handleAva()}} >3</p>
                        </div>
                    </div>
                    {/* <InfoDown infoDwn="Haz clic en cada número y recuerda recoger tu Punto K que descargará un PDF con unas Reglas Generales." caso={this.mond} /> */}
                    <div style={style} >
                        {this.mond}
                        <p style={textI}>Haz clic en cada número y recuerda recoger tu Punto K.</p>
                    </div>
                </div>
            </div>
        )
    }
}

const style = {
    position: 'relative',
    width: '600px',
    height: '80px',
    display: 'inline-flex',
    color: '#808080',
    fontStyle: 'italic',
    margin: '0 auto',
    zIndex: 99,
}

const textI = {
    position: 'relative',
    width: '500px',
    fontStyle: 'italic',
    position: 'relative',
    padding: '10px',
    margin: '0 auto',
    color: '#808080'
}