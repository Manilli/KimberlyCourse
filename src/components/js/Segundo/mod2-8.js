import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import TextInfo from '../textInfo'
import TextDown from '../textDown'
// import coin from '../../../assets/coin.png'
import PopLightBox from '../PopLightBox'
import salud from '../../../assets/Elements/salud.png'
import aud from '../../../assets/hombre.mp3'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.state={
            avail: 0,
        }
        this.puntos = this.props.puntos
        this.song = new Audio(aud)
        this.ini = 342.5
        this.fin = 345

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
        this.setState({avail: 1 })
    }

    render(){
        if (this.state.avail>=1) {
            this.props.audio(true,null,0)
        }
        return(
            <div className="contenedor">
                <Encabezado encabe1="Actividades de promoción y prevención en salud"/>
                <div className="contexto7">
                    <PopLightBox shareMethods={this.acceptMethods} flechas=''/>
                    <TextInfo infor="Ten presente que los riesgos pueden generar enfermedades laborales, y que se  gestionan a través de los Sistemas de Vigilancia Epidemiológica –SVE-. Los que se llevan a cabo en la empresa son:" />
                    <div className="row contenido">
                        <img src={salud} style={style}/>
                    </div>
                    <TextDown stle='eu' infoDwn="Haz clic en el Punto K para recogerlo." caso={2} puntos={this.puntos} callback={this.handlePuntos.bind(this)} popSuge="popSalud" />
                </div>
            </div>
        )
    }
}

const style = {
    width: '100%',
    height: '100%',
}