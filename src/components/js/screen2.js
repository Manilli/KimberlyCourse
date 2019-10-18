import React, { Component } from 'react';
import ScreenRecomenda from './screen2-1'
import Encabezado from './Encabezado'
import '../css/screen2.css';
import PopLightBox from './PopLightBox'
import Navegacion from "../../assets/Elements/recomendacionesDeNavegacion.png";
import Estudio from "../../assets/Elements/sucerenciasDeEstudio.png";
import aud from '../../assets/hombre.mp3'

export default class Screen2 extends Component {
    constructor(props){
        super(props)
        this.state = { 
            open: false,
            disp: 0,
        }
        this.song = new Audio(aud)

        this.song.currentTime=47.5
        this.song.play()
        setInterval(()=>{
            console.log(this.song.currentTime)
            if (this.song.currentTime==this.song.duration) {
                this.song.stop()
            }else if (this.song.currentTime>51.2) {
                this.song.pause()
                if (51.2!=null && 47.5!=54) {
                    this.setState({conti: true})
                }
            }
        },1000)
    }

    componentDidMount(){
        this.props.audio(false, null, null)
    }

    changeView(){
        const {open} = this.state
        const {back} = this.props
        this.props.botones(!open)
        this.setState({open:back})
    }

    handleClick(){
        // setInterval(()=>{
            if (this.state.disp>=2) {
                // this.props.clickd(true)
                this.setState({conti: 0})
            }
        // },1000)
    }

    handleVali(){
        this.setState({ disp: this.state.disp+1 })
    }

    acceptMethods = (openPopSugerencias) => {
        this.openPopSugerencias = openPopSugerencias;
    };

    render(){

        // setInterval(()=>{
            if (this.state.disp>=2) {
                this.props.audio(true, null, 0)
                // this.props.clickd(true)
            }
        // },1000)

        if (this.props.back)
            return  <ScreenRecomenda val={this.handleVali.bind(this)} />
        else{
            return(
                <div className="contenedor">
                    <Encabezado encabe1="¿Cómo comienza tu proceso de aprendizaje?" />
                    <div className="row parraf">
                        <p className="text">Antes de comenzar tu proceso de aprendizaje lee con atención las siguientes recomendaciones, con ellas comprenderás el funcionamiento de este curso y los pasos para realizar un recorrido exitoso. </p>
                    </div>
                    <PopLightBox shareMethods={this.acceptMethods}/>
                    <div className="row recomendaciones">
                        <div className="desktop">
                            <div className="col navegacion">
                                <img src={Navegacion} onClick={()=>{this.changeView()}} width="26%" alt=""/>
                            </div>
                            <div className="col estudio">
                                <img src={Estudio} onClick={()=>{this.setState({ disp: this.state.disp+1 }); this.openPopSugerencias('Estudio')}} width="26%" alt=""/>
                            </div>
                        </div>
                        <div className="span_text">
                            <p className="text">Haz clic sobre los recuadros para ampliar la información.</p>
                        </div>
                    </div>
                </div>
            )
        }
    }
}