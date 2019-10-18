import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import normas from '../../../assets/Elements/normas.png'
import aud from '../../../assets/hombre.mp3'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.song = new Audio(aud)
        this.ini = 406.5
        this.fin = 410

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
                <Encabezado encabe1="Las 10 normas de seguridad Vitales"/>
                <div className="row contexto1">
                    <img src={normas} style={style.normas} />
                </div>
            </div>
        )
    }
}

const style = {
    normas: {
        position: 'relative',
        width: '95%',
        height: '100%',
    }
}