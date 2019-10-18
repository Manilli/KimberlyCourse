import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import '../../css/Quinto/mod5-4.css'
import coin from '../../../assets/coin.png'
import punto1 from '../../../assets/Elements/punto1.png'
import punto2 from '../../../assets/Elements/punto2.png'
import punto3 from '../../../assets/Elements/punto3.png'
import punto4 from '../../../assets/Elements/punto4.png'
import punto5 from '../../../assets/Elements/punto5.png'
import punto6 from '../../../assets/Elements/punto6.png'
import punto7 from '../../../assets/Elements/punto7.png'
import punto8 from '../../../assets/Elements/punto8.png'
import aud from '../../../assets/hombre.mp3'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            disp: 0,
        }
        this.puntos = this.props.puntos
        this.song = new Audio(aud)
        this.ini = 570.5
        this.fin = 576
    }

    componentDidMount(){
        this.props.audio(null,null,null)
        
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

    componentWillUnmount(){
        this.props.audio(false,null,null)
        this.ini = 0
        this.fin = 0
    }

    handleGetCoin(e) {
        switch (e) {
            case 'p1':
                this.imgC = punto1
                this.setState({disp: this.state.disp+1})
                break;
            case 'p2':
                this.imgC = punto2
                this.setState({disp: this.state.disp+1})
                break;
            case 'p3':
                this.imgC = punto3
                this.setState({disp: this.state.disp+1})
                break;
            case 'p4':
                this.imgC = punto4
                this.setState({disp: this.state.disp+1})
                break;
            case 'p5':
                this.imgC = punto5
                this.setState({disp: this.state.disp+1})
                break;
            case 'p6':
                this.imgC = punto6
                this.setState({disp: this.state.disp+1})
                break;
            case 'p7':
                this.imgC = punto7
                this.setState({disp: this.state.disp+1})
                break;
            case 'p8':
                this.imgC = punto8
                this.setState({disp: this.state.disp+1})
                break;
            default:
                break;
        }
    }

    handlePuntos(){
        if (this.puntos < 1600) {
            this.props.callback(this.puntos = this.puntos + 200);
        }
    }
    
    render(){

        if (this.state.disp>=8) {
            this.props.audio(true,null,0)
        }

        return(
            <div className="contenedor">
                <Encabezado encabe1="Puntos K"/>
                <div className="row contenidoPuntos">
                    <p className="text">Si tienes buenas practicas ambientales puedes generar puntos K para la ciudad que construyes durante este proceso de aprendizaje y ayudar en la generación de mejores condiciones para las instalaciones de Kimberly-Clark.</p>
                    <div className="puntos">
                        <div className="row coinTop" >
                            <img src={coin} onClick={() => {this.handlePuntos(); this.handleGetCoin('p1')}} className="coins" />
                            <img src={coin} onClick={() => {this.handlePuntos(); this.handleGetCoin('p2')}} className="coins" />
                            <img src={coin} onClick={() => {this.handlePuntos(); this.handleGetCoin('p3')}} className="coins" />
                            <img src={coin} onClick={() => {this.handlePuntos(); this.handleGetCoin('p4')}} className="coins" />
                        </div>
                        <div className="row coinContent">
                            <img src={this.imgC} className="imgContent"/>
                        </div>
                        <div className="row coinDown" >
                            <img src={coin} onClick={() => {this.handlePuntos(); this.handleGetCoin('p5')}} className="coins" />
                            <img src={coin} onClick={() => {this.handlePuntos(); this.handleGetCoin('p6')}} className="coins" />
                            <img src={coin} onClick={() => {this.handlePuntos(); this.handleGetCoin('p7')}} className="coins" />
                            <img src={coin} onClick={() => {this.handlePuntos(); this.handleGetCoin('p8')}} className="coins" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}