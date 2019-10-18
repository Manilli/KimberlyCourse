import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import '../../css/Primero/mod2.css'
import coin from '../../../assets/coin.png'
import PopLightBox from '../PopLightBox'
import aud from '../../../assets/hombre.mp3'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            avail: 0,
            disp: 0
        }
        this.puntos = this.props.puntos
        this.song = new Audio(aud)
        this.ini = 266.3
        this.fin = 271

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
        this.props.callback(this.puntos + 600);
    }

    render(){
        const {avail} = this.state
        if (avail>=3) {
            this.mond = <img className="coin2" onClick={() => {this.openPopSugerencias('coinTerr'); this.setState({ avail: avail+1 }); this.handlePuntos()}} src={coin} alt="i" width="15%" height="100%"/>
        }else{
            this.mond = null
        }

        if (avail===4) {
            this.props.audio(this,null,0)
        }

        return(
            <div className="contenedor">
                <Encabezado encabe1="Elementos iniciales en nuestro terreno de conocimiento" />
                <div className="row contexto">
                    <PopLightBox shareMethods={this.acceptMethods}/>
                    <p className="text">Las piedras, el concreto y los pilotes son elementos que fortalecen el terreno y garantizan la estabilidad. El Sistema de Gestión de Seguridad, Salud y Medio Ambiente de Kimberly-Clark tiene elementos que también brindan esa estabilidad y fortaleza a la labor que desempeñan los empleados y contratistas. Descubre cómo, conociendo algunos elementos:</p>
                    <div className="Terr">
                        <div className="row">
                            <div className="col"><p className="textPop p1" onClick={() => {this.setState({ disp: this.state.disp+1 }); this.openPopSugerencias('p1'); this.handleAva()}}>Reglamento de Higiene y Seguridad Industrial</p></div>
                            <div className="col"><p className="textPop p2" onClick={() => {this.setState({ disp: this.state.disp+1 }); this.openPopSugerencias('p2'); this.handleAva()}}>Comité de Convivencia</p></div>
                        </div>
                        <div className="row">
                            <p className="textPop p3" onClick={() => {this.setState({ disp: this.state.disp+1 }); this.openPopSugerencias('p3'); this.handleAva()}}>Comité Paritario de Seguridad y salud en el Trabajo</p>
                        </div>
                    </div>
                    <div className="span_textDwn">
                        <p className="text">Haz clic en cada una de los textos y recuerda recoger tu Punto K.</p>
                        {this.mond}
                    </div>
                </div>
            </div>
        )
    }
}