 import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import '../../css/Cuarto/mod4-4.css'
import PopLightBox from '../PopLightBox'
import warning from '../../../assets/Elements/warning.png'
import cirBlue from '../../../assets/Elements/cirBlue.png'
import aud from '../../../assets/hombre.mp3'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.state={
            hide1: 'hide',
            hide2: 'hide',
            hide3: 'hide',
            hide4: 'hide',
            hide5: 'hide',
            hide6: 'hide',
            disp: 0
        }
        this.puntos = this.props.puntos
        this.flecha = null
        this.song = new Audio(aud)
        this.ini = 507
        this.fin = 512
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
        this.setState({disp: this.state.disp+1})
    };

    screenPop(e){
        switch (e) {
            case 24:
                this.flecha = e
                break;
            // case 22:
            //     this.flecha = e
            //     break;
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

    handlePoint(e){
        if (e=='cirBluePoint1') {
            this.setState({hide1: ''})
            this.setState({disp: this.state.disp+1})
        }

        if (e=='cirBluePoint2') {
            this.setState({hide2: ''})
            this.setState({disp: this.state.disp+1})
        }

        if (e=='cirBluePoint3') {
            this.setState({hide3: ''})
            this.setState({disp: this.state.disp+1})
        }

        if (e=='cirBluePoint4') {
            this.setState({hide4: ''})
            this.setState({disp: this.state.disp+1})
        }

        if (e=='cirBluePoint5') {
            this.setState({hide5: ''})
            this.setState({disp: this.state.disp+1})
        }

        if (e=='cirBluePoint6') {
            this.setState({hide6: ''})
            this.setState({disp: this.state.disp+1})
        }
    }

    render(){
        if (this.state.disp>=8) {
            this.props.audio(true,null,0)
        }

        return(
            <div className="contenedor">
                <Encabezado encabe1="Identificación y señalización de los productos químicos" />
                <PopLightBox shareMethods={this.acceptMethods} flechas={this.flecha} screenPop={this.screenPop.bind(this)} />
                <div className="row contenidoAlmacen">
                    <div className="contentTextAlmac">
                        <p className="text" >El etiquetado de todas las sustancias químicas debe realizarse según el Sistema Globalmente Armonizado y su normatividad aplicable en Colombia. La información que debe tener cada envase es la siguiente:</p>
                    </div>
                    <div className="row ideProd">
                        <div className="col firstCol">
                            <div className="row"><p className={"text "+this.state.hide1} >Nombre, sinónimo o componente principal.</p></div>
                            <div className="row"><p className={"text "+this.state.hide2}>Pictograma de peligro (incluir  peligros primarios y secundarios).</p></div>
                            <div className="row textI"><p className="text">Haz clic en cada punto azul y en el rombo rojo para continuar.</p></div>
                        </div>
                        <div className="col-7 SecCol">
                            {/* <img src={ideProdQuim} className="ideProdQuim"/> */}
                            <div className="row puntosHiden">
                                <div className="col hover" onClick={()=>{this.handlePoint('cirBluePoint1')}} ></div>
                                <div className="col contDifer" >
                                    <img src={cirBlue} className="cirBluePoint hover" onClick={()=>{this.handlePoint('cirBluePoint2')}}/>
                                    <img src={warning} className="warning hover" onClick={() => {this.screenPop(24), this.setState({disp: this.state.disp+1})} }/>
                                </div>
                                <div className="col"></div>
                            </div>
                            <div className="row puntosHiden">
                                <div className="col"></div>
                                <div className="col hover" onClick={()=>{this.handlePoint('cirBluePoint3')}} ></div>
                                <div className="col hover" onClick={()=>{this.handlePoint('cirBluePoint4')}} ></div>
                            </div>
                            <div className="row puntosHiden">
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col hover" onClick={()=>{this.handlePoint('cirBluePoint5')}} ></div>
                            </div>
                            <div className="row puntosHiden">
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col hover" onClick={()=>{this.handlePoint('cirBluePoint6')}}></div>
                            </div>
                        </div>
                        <div className="col tercCol">
                            <div className="row"><p className={"text "+this.state.hide3}>Palabra de peligro o atención.</p></div>
                            <div className="row"><p className={"text "+this.state.hide4}>Indicación de peligro: frases H</p></div>
                            <div className="row"><p className={"text "+this.state.hide5}>Consejos de Prudencia: frases P</p></div>
                            <div className="row"><p className={"text "+this.state.hide6}>Información del proveedor.</p></div>
                        </div>
                    </div>
                    <p className="text" style={textA}>Nota: Cada contratista debe traer sus propias etiquetas</p>
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

const textA = {
    position: 'relative',
    color: '#4080C0',
    fontWeight: 'bolder',
    top: '-30px',
}