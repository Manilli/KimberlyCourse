import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import '../../css/Primero/mod3.css'
import pplePtho from '../../../assets/Photos/pplePtho.png'
import PopLightBox from '../PopLightBox'
import aud from '../../../assets/hombre.mp3'
// import file from '../../../assets/test.pdf'

export default class Mod1o3 extends Component {
    acceptMethods = (openPopSugerencias) => {
        this.openPopSugerencias = openPopSugerencias;
    };

    componentDidMount(){
        this.props.audio(null, null, null)
        this.song = new Audio(aud)
        this.ini = 272
        this.fin = 274

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

    render(){
        return(
            <div className="contenedor">
                <Encabezado encabe1="¿Cuáles serán tus cimientos durante tus labores en Kimberly-Clark?" />
                <div className="row contexto">
                    <PopLightBox shareMethods={this.acceptMethods} clase='conduc' /*file={file} type="pdf"*//>
                    <p className="text">Tus cimientos serán los valores y conductas que asumas durante la realización de tus labores, estas bases de comportamiento deben estar alineadas con el Código de Conducta de Kimberly-Clark, el cual es una guía valiosa sobre cuestiones éticas que pueden surgir en la relación con compañeros de trabajo, clientes, contratistas, proveedores, competidores y el público en general.</p>
                    <p className="minText">Haz clic en el foto.</p>
                </div>
                <div className="contImag">
                    <img src={pplePtho} onClick={() =>{this.props.audio(true, null, 0); this.openPopSugerencias('pplePtho')}} alt="i" className="pplePtho"/>
                </div>
            </div>
        )
    }
}