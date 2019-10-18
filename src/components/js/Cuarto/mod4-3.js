import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import '../../css/Cuarto/mod4-3.css'
import coin from '../../../assets/coin.png'
import almacen from '../../../assets/Elements/almacen.png'
import PopLightBox from '../PopLightBox'
import aud from '../../../assets/hombre.mp3'


export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            avail: 0,
        }
        this.puntos = this.props.puntos
        this.song = new Audio(aud)
        this.ini = 503.5
        this.fin = 506.5
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
        this.props.callback(this.puntos + 600);
        this.setState({avail: 1})
    }

    render(){
        if (this.state.avail===1) {
            this.props.audio(this,null,0)
        }

        return(
            <div className="contenedor">
                <Encabezado encabe1="Ingreso y transporte de los productos químicos" />
                <PopLightBox shareMethods={this.acceptMethods} />
                <div className="row contenidoAlmacen">
                    <div className="contentTextAlmac">
                        <p className="text" >Las sustancias químicas inflamables deben ser almacenadas en gabinetes certificados, aprobados por el Área de Seguridad, Salud Y Medio Ambiente de Kimberly-Clark. En los gabinetes solo puede almacenarse un máximo de 60 galones. </p>
                    </div>
                    <div className="row">
                        <div className="col">
                            <img src={almacen} className="imgAlmac"/>
                        </div>
                        <div className="col leftAlmac">
                            <div className="row">
                                <p className="text textinfoAlmac">En cada zona de almacenamiento debe existir una carpeta que contenga las fichas de datos de seguridad actualizadas y disponibles para el personal que realiza la manipulación y, de manera visible, la matriz de compatibilidad química específica que debe aplicarse en el almacenamiento.</p>
                            </div>
                            <div className="row">
                                <img src={coin} onClick={() => {this.openPopSugerencias('coinAlmac'); this.handlePuntos()}} className="coinAlmac"/>
                                <p style={style} >Haz clic en el punto K para recogerlo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const style = {
    position: 'relative',
    marginLeft: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#808080',
}