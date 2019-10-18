import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import '../../css/Quinto/mod5-3.css'
import PopLightBox from '../PopLightBox'
import aud from '../../../assets/hombre.mp3'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            disp: 0,
        }
        this.flecha = null
        this.song = new Audio(aud)
        this.ini = 566.5
        this.fin = 570
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
        this.props.audio(null,null,null)
    }

    acceptMethods = (openPopSugerencias) => {
        this.openPopSugerencias = openPopSugerencias;
    };

    screenPop(e){
        switch (e) {
            case 19:
                this.flecha = e
                break;
            case 22:
                this.flecha = e
                break;
            default:
                break;
        }
        
        if (e=='fLeft') {
            this.flecha = this.flecha+1
            this.openPopSugerencias('Evac'+this.flecha)
        }else if(e=='fRight') {
            this.flecha = this.flecha-1
            this.openPopSugerencias('Evac'+this.flecha)
        }else
            this.openPopSugerencias('Evac'+e)
    }

    render(){

        if (this.state.disp>=4) {
            this.props.audio(true,null,0)
        }
        return(
            <div className="contenedor">
                <Encabezado encabe1="Buenas prácticas de manufactura"/>
                <PopLightBox shareMethods={this.acceptMethods} flechas={this.flecha} screenPop={this.screenPop.bind(this)} />
                <div className="row contenidoAmbiental">
                    <p className="text">En Kimberly-Clark tenemos un gran compromiso con el medio ambiente y esperamos que tú también te comprometas con este durante el cumplimiento de tus labores. </p>
                    <div className="col contAmbiental">
                        <p className="text"><span className="textAmbien">¿Cómo lo harás? </span></p>
                        <p className="text">Sigue estas recomendaciones:</p>
                        <div className="palabras" >
                            <div className="frases" onClick={() => {this.setState({disp: this.state.disp+1}); this.screenPop(19)}} >Manejo de residuos</div>
                            <div className="frases" onClick={() => {this.setState({disp: this.state.disp+1}); this.screenPop(22)}} >Uso Responsable del Agua</div>
                            <div className="frases" onClick={() => {this.setState({disp: this.state.disp+1}); this.openPopSugerencias('calidadAire')}} >Calidad del Aire</div>
                            <div className="frases" onClick={() => {this.setState({disp: this.state.disp+1}); this.openPopSugerencias('usoEnergia')}} >Uso Responsable de la Energía</div>
                        </div>
                    </div>
                    <p className="textIAmbien">Haz clic en cada una de las frases.</p>
                </div>
            </div>
        )
    }
}