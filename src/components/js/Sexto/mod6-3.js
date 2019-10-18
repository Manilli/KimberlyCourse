import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import prevenir from '../../../assets/Elements/prevenir.png'
import aud from '../../../assets/hombre.mp3'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.song = new Audio(aud)
        this.ini = 623
        this.fin = 626.5
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

    acceptMethods = (openPopSugerencias) => {
        this.openPopSugerencias = openPopSugerencias;
    };

    componentDidMount(){
        this.props.audio(true,null,0)
    }

    componentWillUnmount(){
        this.props.audio(false,null,null)
    }

    render(){
        return(
            <div className="contenedor">
                <Encabezado encabe1="#PrevenirEsSeguridad" encabe2='Identificar y Dirigirse a personas no Identificadas'/>
                <div style={contentPrevenir}>
                    <img src={prevenir} style={style}/>
                </div>
            </div>
        )
    }
}

const style = {
    position: 'relative',
    width: '100%',
    height: '100%',
}

const contentPrevenir = {
    position: 'relative',
    width: '800px',
    margin: '0 auto',
}