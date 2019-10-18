import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import '../../css/Tercero/mod3-1.css'
import coin from '../../../assets/coin.png'
import PopLightBox from '../PopLightBox'
import TextInfo from '../textInfo'
import TextDown from '../textDown'
// import bgtar from '../../../assets/Elements/bgTar.png'
import aud from '../../../assets/hombre.mp3'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            avail: 0,
        }
        this.flecha = null
        this.puntos = this.props.puntos
        
        this.song = new Audio(aud)
        this.ini = 402.5
        this.fin = 406

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
        this.props.callback(this.puntos + 400);
        this.setState({ avail: this.state.avail+1 })
    }

    screenPop(e){
        if (e=='fLeft') {
            this.flecha = this.flecha+1
            this.openPopSugerencias('Evac'+this.flecha)
        }else if(e=='fRight') {
            this.flecha = this.flecha-1
            this.openPopSugerencias('Evac'+this.flecha)
        }else
            this.openPopSugerencias('Evac'+e)

        switch (e) {
            case 4:
                this.flecha = e
                break;
            case 6:
                this.flecha = e
                break;
            case 8:
                this.flecha = e
                break;
            case 10:
                this.flecha = e
                break;
            case 12:
                this.flecha = e
                break;
            case 14:
                this.flecha = e
                break;
            default:
                break;
        }
    }

    render(){
        const {avail} = this.state
        if (avail>=6) {
            this.mond = 2
            this.coinPop = 'coinEPP'
        }else{
            this.mond = null
            this.coinPop = null
        }

        if (avail>=7) {
            this.props.audio(true,null,0)
        }
        
        return(
            <div className="contenedor">
                <Encabezado encabe1="Tareas de Alto Riesgo –TAR-"/>
                <div className="row contexto1">
                    <PopLightBox shareMethods={this.acceptMethods} flechas={this.flecha} screenPop={this.screenPop.bind(this)} />
                    <TextInfo 
                        caso={this.mond} 
                        clase='Epp' type="pdf" 
                        textCoinPop={this.coinPop} 
                        puntos={this.puntos} 
                        callback={this.handlePuntos.bind(this)} 
                        infor="Las Tareas de Alto Riesgo –TAR- son todas aquellas actividades que, por su naturaleza o lugar de cumplimiento, implican una mayor exposición o probabilidad de accidentes laborales severos o mortales, para quien las realiza o para las personas que se encuentran cerca." 
                        infor2="Identifica la TAR que tú realizas en las instalaciones de Kimberly-Clark y lee con cuidado las recomendaciones:"
                    />
                    
                    <div className="row Tar">
                        {/* <img src={bgtar} className="bgTar"/> */}
                        <div className="col cargas">
                            <p className="textA textTar" onClick={() => {this.screenPop(4); this.handleAva()}}>Izaje de cargas</p>
                        </div>
                        <div className="col confinados">
                            <p className="textA textTar" onClick={() => {this.screenPop(6); this.handleAva()}}>Espacios confinados</p>
                        </div>
                        <div className="col loto">
                            <p className="textA textTar" onClick={() => {this.screenPop(8); this.handleAva()}}>LOTO</p>
                        </div>
                        <div className="col electrica">
                            <p className="textA textTar" onClick={() => {this.screenPop(10); this.handleAva()}}>Seguridad eléctrica</p>
                        </div>
                        <div className="col caliente">
                            <p className="textA textTar" onClick={() => {this.screenPop(12); this.handleAva()}}>Trabajos en caliente</p>
                        </div>
                        <div className="col alturas">
                            <p className="textA textTar" onClick={() => {this.screenPop(14); this.handleAva()}}>Alturas</p>
                        </div>
                    </div>
                    <TextDown infoDwn="Haz clic en cada título para ampliar la información." />
                </div>
            </div>
        )
    }
}