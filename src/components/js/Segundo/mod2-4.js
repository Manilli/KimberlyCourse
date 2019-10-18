import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import '../../css/Segundo/mod2plant.css'
import aud from '../../../assets/hombre.mp3'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.song = new Audio(aud)
        this.ini = 327.5
        this.fin = 330.5

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
        this.props.audio(true,null,0)
    }

    render(){
        return(
            <div className="contenedor">
                <Encabezado encabe1="Aspectos ambientales que pueden presentarse en Kimberly-Clark"/>
                <div className="contextoAa"></div>
            </div>
        )
    }
}