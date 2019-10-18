import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import '../../css/Cuarto/mod4-1.css'
import quimicos from '../../../assets/Photos/photoProdQuimicos.png'
import aud from '../../../assets/hombre.mp3'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.song = new Audio(aud)
        this.ini = 493
        this.fin = 497
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
        },100)
    }

    componentDidMount(){
        this.props.audio(true,null,0)
    }

    render(){
        return(
            <div className="contenedor">
                <Encabezado encabe1="El manejo seguro de los productos químicos" />
                <div className="row contenidoQuimico">
                    <div className="col contentText">
                        <p className="text" >El uso de productos químicos es un aspecto de gran relevancia dentro de las instalaciones de Kimberly-Clark, por eso le hemos dedicado un especial espacio durante este proceso de aprendizaje.</p>
                        <p className="text" >El uso de productos químicos exige controles estrictos durante el transporte, almacenamiento, manipulación, disposición. Los controles incluyen requerimientos de identificación, señalización, capacitación, contención, inspección, uso de EPP y procedimientos de manipulación.</p></div>
                    <div className="col"><img src={quimicos} className="quimicos"/></div>
                </div>
            </div>
        )
    }
}