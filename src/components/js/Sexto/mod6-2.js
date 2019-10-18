import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import '../../css/Sexto/mod6-2.css'
import Dedo from '../Flechas'
import aud from '../../../assets/Ajuste.mp3'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.song = new Audio(aud)
        this.ini = 0
        this.fin = 9
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
        this.props.audio(null, null, null)
    }

    acceptMethods = (openPopSugerencias) => {
        this.openPopSugerencias = openPopSugerencias;
    };

    handleBack(){
        this.props.audio(true, null, 0)
    }

    render(){
        return(
            <div className="contenedor">
                <Encabezado encabe1="La seguridad en Kimberly-Clark"/>
                <div className="row contenidoSeguridad">
                    <p className="text">En Kimberly-Clark tenemos un gran compromiso con el medio ambiente y esperamos que tú también te comprometas con este durante el cumplimiento de tus labores. </p>
                    <p className="text"><span className="textSeguro">Política de Seguridad</span></p>
                    <div className="col seguridad">
                        <Dedo audio={this.handleBack.bind(this)} />
                    </div>
                    <p className="textISegu">Alcanza la seguridad moviendo la mano por cada uno de los números. Para hacerlo utiliza las flechas de tu teclado.</p>
                </div>
            </div>
        )
    }
}