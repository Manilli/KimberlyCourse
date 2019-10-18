import React, { Component } from 'react'
import '../../css/Tercero/mod3-3.css'
import PopLightBox from '../PopLightBox'
import Encabezado from '../Encabezado'
import atencion from '../../../assets/Photos/atencion.png'
import coin from  '../../../assets/coin.png'
import aud from '../../../assets/hombre.mp3'
import file from '../../../assets/pdfs/4_PET.PDF'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            avail: 0,
        }
        this.puntos = this.props.puntos
        this.flecha = 16
        this.clase = null
        this.type = null
        this.song = new Audio(aud)
        this.ini = 415.5
        this.fin = 421

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

    handleAva(){
        const {avail} = this.state
        this.setState({ avail: avail+1 })
    }

    acceptMethods = (openPopSugerencias) => {
        this.openPopSugerencias = openPopSugerencias;
    };

    handlePuntos(){
        this.props.callback(this.puntos + 400);
        this.setState({ avail: this.state.avail+1 })
    }

    screenPop(e){
        if (e=='fLeft') {
            this.flecha = this.flecha+1
            this.clase = 'CoinPET'
            this.type = 'pdf'
            this.openPopSugerencias('Evac'+this.flecha)
        }else if(e=='fRight') {
            this.flecha = this.flecha-1
            this.openPopSugerencias('Evac'+this.flecha)
        }else{
            this.openPopSugerencias('Evac'+this.flecha)
        }
        
    }

    render(){
        const {avail} = this.state
        if (avail>=1) {
            this.mond = <img src={coin} className="coinA" onClick={() => {this.handlePuntos()}} />
        }else{
            this.mond = null
        }

        if (avail===2) {
            this.props.audio(true,null,0)
        }

        return(
            <div className="contenedor">
                <Encabezado encabe1="¡Atención, esto es serio!"/>
                <div className="row contexto1">
                    <PopLightBox shareMethods={this.acceptMethods} flechas={this.flecha} clase={this.clase} type={this.type} file={file} screenPop={this.screenPop.bind(this)} />
                    <div className="col">
                        <div className="row">
                            <p className="text">¿Recuerdas que al iniciar este recorrido virtual te contamos que al finalizarlo obtendrías un carné que te identificará durante tus labores en Kimberly-Clark?</p>
                            <p className="text">En este carné estarán las firmas que te autorizan para realizar las Tareas de Alto Riesgo, estos consentimientos solo se te otorgarán cuando te capacites en el tema (pasando la prueba escrita con un puntaje superior al 80%) y cuentes con los <span className="textSubra" onClick={() => {this.screenPop(); this.handleAva()}} >permisos</span> necesarios.</p>
                        </div>
                        <div className="row Punto">
                            {/* <img src={coin} className="coinA" onClick={() => {this.handlePuntos()}} /> */}
                            {this.mond}
                            <p className="textDwn">Haz clic en la palabra permiso y recuerda recoger tu Punto K. </p>
                        </div>
                    </div>
                    <div className="col">
                        <img src={atencion} className="photoAtencion"/>
                    </div>
                </div>
            </div>
        )
    }
}