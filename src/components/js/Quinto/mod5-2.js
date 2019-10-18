import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import manufactura from '../../../assets/Elements/manufactura.png'
import aud from '../../../assets/hombre.mp3'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.song = new Audio(aud)
        this.ini = 562.5
        this.fin = 566
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

    acceptMethods = (openPopSugerencias) => {
        this.openPopSugerencias = openPopSugerencias;
    };

    render(){
        return(
            <div className="contenedor">
                <Encabezado encabe1="Buenas prácticas de manufactura"/>
                <div style={style.manuf}>
                    <img src={manufactura} style={style.imgManuf}/>
                </div>
            </div>
        )
    }
}

const style = {
    manuf: {
        position: 'relative',
        width: '100%',
        height: '80%',
        top: '-30px',
    },

    imgManuf: {
        position: 'relative',
        width: '99%',
        top: '-30%',
    }
}