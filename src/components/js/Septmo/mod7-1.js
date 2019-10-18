import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import PopLightBox from '../PopLightBox'
import '../../css/Septmo/mod7-1.css'
import person1 from '../../../assets/Elements/person1.png'
import person2 from '../../../assets/Elements/person2.png'
import person3 from '../../../assets/Elements/person3.png'
import file from '../../../assets/pdfs/7_Política_Uso_de_Teléfonos_Móviles_2019.pdf'
import aud from '../../../assets/hombre.mp3'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            disp: 0,
        }
        this.song = new Audio(aud)
        this.ini = 664.5
        this.fin = 670.5
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

    acceptMethods = (openPopSugerencias) => {
        this.openPopSugerencias = openPopSugerencias;
    };

    componentDidMount(){
        this.props.audio(null, null, null)
    }

    render(){

        if (this.state.disp>=3) {
            this.props.audio(true, null, 0)
        }

        return(
            <div className="contenedor">
                <Encabezado encabe1="La Seguridad es un Valor"/>
                <PopLightBox shareMethods={this.acceptMethods} clase={'pdfCelular'} type={"pdf"} file={file} />
                <div className="row contentValor">
                    <p className="text">No hay excusas para permitir que los riesgos cobren vidas humanas o destruyan el medio ambiente. Por eso es hora de salvar a las personas que recorren nuestras calles… <br/>¿Cómo hacerlo?, ya lo descubrirás…</p>
                    <div className="row bgCity">
                        <div className="row">
                            <div className="col"><img src={person1} onClick={() => {this.setState({disp: this.state.disp+1}); this.openPopSugerencias('prsn1')}} className="pers prsn1"/></div>
                            <div className="col"><img src={person2} onClick={() => {this.setState({disp: this.state.disp+1}); this.openPopSugerencias('prsn2')}} className="pers prsn2"/></div>
                        </div>
                        <div className="row">
                            <div className="col"><img src={person3} onClick={() => {this.setState({disp: this.state.disp+1}); this.openPopSugerencias('prsn3')}} className="pers prsn3"/></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}