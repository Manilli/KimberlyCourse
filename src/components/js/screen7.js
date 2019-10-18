import React, { Component } from 'react';
import Encabezado from './Encabezado'
import '../css/screen7.css'
import PopLightBox from './PopLightBox'
import aud from '../../assets/hombre.mp3'

export default class Screen2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            disp: 0,
        }
        this.song = new Audio(aud)
        this.ini = 206
        this.fin = 209

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

    acceptMethods = (openPopSugerencias) => {
        this.openPopSugerencias = openPopSugerencias;
    }

    componentDidMount(){
        this.props.audio(null,null,null)
    }

    render(){
        if (this.state.disp>=3) {
            this.props.audio(null,null,0)
        }
        return(
            <div className="contenedor">
                <Encabezado encabe1="Las tres responsabilidades de la seguridad" encabe2="que asumirás a partir de hoy" />
                <div className="row sos">
                    <PopLightBox shareMethods={this.acceptMethods}/>
                    <div className="row imgSos">
                        <p className="textSos verlo" onClick={() => {this.setState({ disp: this.state.disp+1 }); this.openPopSugerencias('Verlo')}} >Verlo</p>
                        <p className="textSos adue" onClick={() => {this.setState({ disp: this.state.disp+1 }); this.openPopSugerencias('Adue')}} >Adueñarse</p>
                        <p className="textSos resolv" onClick={() => {this.setState({ disp: this.state.disp+1 }); this.openPopSugerencias('Resolv')}} >Resolverlo</p>
                    </div>
                    <div className="span_text2">
                        <p className="text2">Es necesario que construyamos entre todos una confianza empresarial y una cultura de seguridad. </p>
                        <p className="textSpan"><span>!Aprópiate de tus responsabilidades, hazlo por la seguridad de todos!</span></p>
                    </div>
                </div>
            </div>
        )
    }
}