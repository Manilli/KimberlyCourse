import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import '../../css/Segundo/mod2-1.css'
import coin from '../../../assets/coin.png'
import PopLightBox from '../PopLightBox'
import Peligro from '../../../assets/Elements/peligro.png'
import Riesgo from '../../../assets/Elements/riesgo.png'
import ImpAmb from '../../../assets/Elements/ImpAmb.png'
import Amenaza from '../../../assets/Elements/amenaza.png'
import aud from '../../../assets/hombre.mp3'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            avail: 0,
        }
        this.puntos = this.props.puntos
        this.song = new Audio(aud)
        this.ini = 322
        this.fin = 327

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

    handleAva(){
        const {avail} = this.state
        this.setState({ avail: avail+1 })
    }
    
    handlePuntos(){
        this.props.callback(this.puntos + 300);
    }

    render(){
        const {avail} = this.state
        if (avail>=4) {
            this.mond = <img className="coin2" onClick={() => {this.openPopSugerencias('coinSitua'); this.setState({ avail: avail+1 }); this.handlePuntos()}} src={coin} alt="i" width="15%" height="100%"/>
        }else{
            this.mond = null
        }

        if (avail===5) {
            this.props.audio(true,null,0)
        }

        return(
            <div className="contenedor">
                <Encabezado encabe1="Identificación y valoración de peligros, riesgos," encabe2="impactos ambientales y amenazas"/>
                <div className="row contexto">
                    <PopLightBox shareMethods={this.acceptMethods}/>
                    <p className="text">En el Sistema de Gestión de Seguridad, Salud y Medio Ambiente de Kimberly-Clark también tenemos un plano conceptual que nos permite identificar y valorar los peligros, riesgos, aspectos e impactos ambientales y amenazas</p>
                    <div className="lineAux"></div>
                    <div className="row Situa">
                        <div className="col Peligro">
                            <img src={Peligro} className="im gPeligro" onClick={() => {this.openPopSugerencias('Peligro'); this.handleAva()}} alt="a"/>
                        </div>
                        <div className="col Riesgo">
                            <img src={Riesgo} className="im gRiesgo" onClick={() => {this.openPopSugerencias('Riesgo'); this.handleAva()}} alt="s"/>
                        </div>
                        <div className="col ImpAmb">
                            <img src={ImpAmb} className="im gImpAmb" onClick={() => {this.openPopSugerencias('ImpAmb'); this.handleAva()}} alt="d"/>
                        </div>
                        <div className="col Amenaza">
                            <img src={Amenaza} className="im gAmenaza" onClick={() => {this.openPopSugerencias('Amenaza'); this.handleAva()}} alt="f"/>
                        </div>                         
                    </div>
                    <div className="span_textDwn">
                        <p className="text">Haz clic en cada una de las situaciones y recuerda recoger tu Punto K.</p>
                        {this.mond}
                    </div>
                </div>
            </div>
        )
    }
}