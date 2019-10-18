import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import '../../css/Segundo/mod2-7.css'
import coin from '../../../assets/coin.png'
import PopLightBox from '../PopLightBox'
import claseA from '../../../assets/Elements/claseA.png'
import claseB from '../../../assets/Elements/claseB.png'
import claseC from '../../../assets/Elements/claseC.png'
import claseAOpen from '../../../assets/Elements/claseAOpen.png'
import claseBOpen from '../../../assets/Elements/claseBOpen.png'
import claseCOpen from '../../../assets/Elements/claseCOpen.png'
import aud from '../../../assets/hombre.mp3'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false,
            extin: 'nada',
            avail: 0,
        }
        this.puntos = this.props.puntos
        this.song = new Audio(aud)
        this.ini = 338
        this.fin = 342

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

    handlePuntos(){
        this.props.callback(this.puntos + 300);
        this.setState({ avail: this.state.avail+1 })
    }

    handleAva(){
        const {avail} = this.state
        this.setState({ avail: avail+1 })
    }

    handleExt(e){
        setTimeout(() => {
            this.setState({ extin: e })
        }, 500)
    }

    changeView(){
        const {open} = this.state
        const {back} = this.props
        this.props.botones(!open)
        this.setState({open:back})
        // console.log(open)
        // console.log(back)
        // console.log(this.state.extin)
    }

    render(){
        const {avail} = this.state
        if (avail>=3) {
            this.mond = <img className="coin7" onClick={() => {this.handlePuntos()}} src={coin} width="15%" height="100%"/>
        }else{
            this.mond = null
        }

        if (avail===4) {
            this.props.audio(true,null,0)
        }

        if (!this.props.back && this.state.extin != 'nada') {
            this.setState({extin: 'nada'})
        }

        switch (this.state.extin) {
            case 'nada':
                this.ext = 
                    <div className="row extintores">
                        <div className="col clases"><img src={claseA} className="claseAImg" onClick={() => {this.handleExt('claseA'); this.changeView(); this.handleAva()}} /></div>
                        <div className="col clases"><img src={claseB} className="claseBImg" onClick={() => {this.handleExt('claseB'); this.changeView(); this.handleAva()}} /></div>
                        <div className="col clases"><img src={claseC} className="claseCImg" onClick={() => {this.handleExt('claseC'); this.changeView(); this.handleAva()}} /></div>
                    </div>
                this.infoDwn = <p className="textI">Haz clic sobre cada extintor para conocer sus características</p>
                    break;
            case 'claseA':
                this.ext = 
                    <div className="row extintores">
                        <div className="col clases"><img src={claseAOpen} className="claseOpen" /></div>
                    </div>
                    this.infoDwn = <p className="textI">Haz clic sobre el botón Volver para poder continuar</p>
                break;
            case 'claseB':
                this.ext = 
                    <div className="row extintores">
                        <div className="col clases"><img src={claseBOpen} className="claseOpen" /></div>
                    </div>
                    this.infoDwn = <p className="textI">Haz clic sobre el botón Volver para poder continuar</p>
                break;
            case 'claseC':
                this.ext = 
                    <div className="row extintores">
                        <div className="col clases"><img src={claseCOpen} className="claseOpen" /></div>
                    </div>
                    this.infoDwn = <p className="textI">Haz clic sobre el botón Volver para poder continuar</p>
                break;
            default:
                break;
        }

        return(
            <div className="contenedor">
                <Encabezado encabe1="Manejo de extintores"/>
                <div className="contexto7">
                    <PopLightBox shareMethods={this.acceptMethods} flechas=''/>
                    <div className="col Dwn7">
                        <p className="text info">Si hay un incendio todos estamos obligados a usar los extintores disponibles de acuerdo con el tipo de fuego. Si no sabes cómo usarlos infórmale a los brigadistas para que ellos atiendan la contingencia Aprovecha las capacitaciones sobre estos elementos, estas nociones pueden llegar a salvarte la vida.</p>
                        {this.mond}
                    </div>
                    {this.ext}
                    <div className="col Dwn6-1">
                        {this.infoDwn}
                    </div>
                </div>
            </div>
        )
    }
}