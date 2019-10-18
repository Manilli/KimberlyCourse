import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import '../../css/Cuarto/mod4-2.css'
import InfoDown from '../textDown'
import PopLightBox from '../PopLightBox'
import file from '../../../assets/pdfs/5_Reglas_Generales.pdf'
import aud from '../../../assets/hombre.mp3'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            avail: 0,
        }
        this.puntos = this.props.puntos
        this.song = new Audio(aud)
        this.ini = 497.5
        this.fin = 503
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

    handlePuntos(){
        this.props.callback(this.puntos + 400);
        this.setState({ avail: this.state.avail+1 })
    }

    handleAva(){
        const {avail} = this.state
        this.setState({ avail: avail+1 })
    }

    render(){
        const {avail} = this.state
        if (avail>=1) {
            this.mond = 1
        }else{
            this.mond = null
        }

        if (avail===2) {
            this.props.audio(true,null,0)
        }

        return(
            <div className="contenedor">
                <Encabezado encabe1="Ingreso y transporte de los productos químicos" />
                <PopLightBox shareMethods={this.acceptMethods} clase='Pquimicos' type='pdf' file={file} />
                <div className="row contenidoTransporte">
                    <div className="col contentTextTrans">
                        <p className="text" >Para el ingreso de sustancias químicas a las instalaciones de Kimberly-Clark debes considerar los siguientes requisitos:</p>
                    </div>
                    <div className="row Transp">
                        <div className="col contTextTrans">
                            <p className="text">Tener las fichas de datos de seguridad de acuerdo con la NTC 4435. Estas fichas deben estar en español y su fecha de actualización debe ser menor a cinco años.</p>
                        </div>
                        <div className="col contTextTrans">
                            <p className="text">Diligenciar el pasaporte de ingreso de químicos de acuerdo con la ficha de datos de seguridad. Entrega el pasaporte al Área de Seguridad, Salud y Medio Ambiente para su firma y autorización,  presenta este documento en portería.</p>
                        </div>
                        <div className="col contTextTrans">
                            <p className="text">Ten en cuenta que existe una  lista de sustancias controladas por el Consejo Nacional de Estupefacientes  y que, además, Kimberly-Clark restringe el uso de otras sustancias.
                                <br/><span className="textA" onClick={() => {this.openPopSugerencias('prodQuimi'); this.handleAva()}}>(Descarga la lista de sustancias controladas por el Consejo Nacional de Estupefacientes y restringidas por Kimberly Clark).</span>
                            </p>
                        </div>
                    </div>
                </div>
                <InfoDown caso={this.mond} popSuge='' puntos={this.props.puntos} callback={this.handlePuntos.bind(this)} infoDwn='Haz clic en las frases subrayadas y recuerda recoger tu Punto K.' />
            </div>
        )
    }
}