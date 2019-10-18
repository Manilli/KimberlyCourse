import React, { Component } from 'react';
import Encabezado from './Encabezado'
import '../css/screen4.css'
import aud from '../../assets/hombre.mp3'

export default class Screen2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            Conocer: 'Conocer',
            Hacer: 'Hacer',
            Ser: 'Ser',
            disp: 0,
        }
        this.song = new Audio(aud)
        this.ini = 153
        this.fin = 156.5

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

    handleClicked(e){
        switch (e) {
            case 'Conocer':
                this.setState({ Conocer: 'ConocerA' })
                this.setState({ disp: this.state.disp+1 })
                break;
            case 'Hacer':
                this.setState({ Hacer: 'HacerA' })
                this.setState({ disp: this.state.disp+1 })
                break;
            case 'Ser':
                this.setState({ Ser: 'SerA' })
                this.setState({ disp: this.state.disp+1 })
                break;
            default:
                break;
        }

        // setInterval(()=>{
        //     if (this.state.disp>=3) {
        //         this.props.audio(null,null,0)
        //     }
        // },1000)
    }

    render(){
        if (this.state.disp>=3) {
            this.props.audio(null,null,0)
        }
        return(
            <div className="contenedor">
                <Encabezado encabe1="Lo que aprenderás en este recorrido virtual" />
                <div className="row parraf">
                    <p className="text">Este paso a paso por el camino de la formación te permitirá: conocer, hacer y ser. Con las nociones podrás establecer comportamientos más seguros y, al hacerlo, podrás cambiar tu vida y las de otras personas que se encuentran a tu alrededor.</p>
                    <div className="recorrido">
                        <div className="row">
                            <div className={"col "+this.state.Conocer} onClick={()=>this.handleClicked('Conocer')} ></div>
                            <div className={"col "+this.state.Hacer} onClick={()=>this.handleClicked('Hacer')} ></div>
                            <div className={"col "+this.state.Ser} onClick={()=>this.handleClicked('Ser')} ></div>
                        </div>
                        <div className="span_texto">
                            <p className="text">Haz clic sobre los recuadros para ampliar la información.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}