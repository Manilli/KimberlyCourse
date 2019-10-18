import React, { Component } from 'react';
import PopLightBox from '../PopLightBox'
import normas from '../../../assets/Elements/dialogSeguridad.png'
import aud from '../../../assets/hombre.mp3'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            avail: 0,
        }
        this.song = new Audio(aud)
        this.ini = 410.5
        this.fin = 415

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

    handleAvail(){
        this.props.audio(true,null,0)
    }

    acceptMethods = (openPopSugerencias) => {
        this.openPopSugerencias = openPopSugerencias;
    };

    render(){
        return(
            <div className="contenedor">
                <PopLightBox shareMethods={this.acceptMethods} />
                <div className="row contexto1">
                    <img src={normas} style={style.normas} />
                    <p className="textBlanco" onClick={()=>{ this.openPopSugerencias('dialogSeguridad'), this.handleAvail() }}>
                        <span style={{borderBottom: '1px solid white'}}>Pasos</span> para realizar un dialogo de seguridad
                    </p>
                </div>
            </div>
        )
    }
}

const style = {
    normas: {
        position: 'relative',
        width: '95%',
        height: '100%',
    },

    texto: {
        position: 'absolute',
        color: 'white',
        fontWeight: 'bold',
        width: '100px',
        lineHeight: '1.3',
        top: '350px',
        left: '525px',
    }
}