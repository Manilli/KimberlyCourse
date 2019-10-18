import React, { Component } from 'react';
import Encabezado from './Encabezado'
import tarjeta from '../../assets/Elements/tarj.png'
import aud from '../../assets/hombre.mp3'

export default class Screen2 extends Component {
    constructor(props){
        super(props)
        this.song = new Audio(aud)
        this.ini = 201.5
        this.fin = 205.5

        this.song.currentTime=this.ini
        this.song.play()
        setInterval(()=>{
            console.log(this.song.currentTime)
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

    render(){
        return(
            <div className="contenedor" style={style}>
                <Encabezado encabe1="¿Qué ganarás al terminar este recorrido?" />
                <div className="tarjetas">
                    <img src={tarjeta} alt="i" width="92%" />
                </div>
            </div>
        )
    }
}

const style = {
    maxWidth: '900px',
    maxHeight: '510px',
    margin: '0 auto',
}