import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import '../../css/Quinto/mod5-1.css'
import buenas from '../../../assets/Photos/photoBuenasPrac.png'
import PopLightBox from '../PopLightBox'
import aud from '../../../assets/hombre.mp3'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.song = new Audio(aud)
        this.ini = 558
        this.fin = 562
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

    render(){
        return(
            <div className="contenedor">
                <Encabezado encabe1="Buenas prácticas de manufactura"/>
                <PopLightBox shareMethods={this.acceptMethods} />
                <div className="row parraf">
                    <p className="text">Las Buenas Practicas de Manufactura –BPM-  son los principios básicos y prácticas generales que se ejecutan para garantizar que los productos elaborados en Kimberly-Clark son seguros para el consumo humano. Estas prácticas involucran la higiene en la manipulación, preparación, elaboración, envasado, almacenamiento, transporte y distribución.</p>
                    <p className="text">Las BPM aplican a bodegas, pisos de producción, centros de distribución y toda la cadena relacionada con el producto.</p>
                    <div className="row">
                        <div className="col-3 textPract">
                            <p className="buenasPracticas">Haz clic en la imagen para ampliar la información</p>
                        </div>
                        <div className="col">
                            <img src={buenas} onClick={() => {this.props.audio(true,null,0); this.openPopSugerencias('buenasPracticas')}} className="buenas"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}