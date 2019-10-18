import React, { Component } from 'react';
import Video from '../modVideo'
import videoF from '../../../assets/Secuencia-01.mp4'
// import coin from '../../../assets/coin.png'
import aud from '../../../assets/hombre.mp3'

export default class Mod1o1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            avail: 0
        }
        this.song = new Audio(aud)
        this.ini = 258.8
        this.fin = 266

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
        this.props.video(null,null,null)
    }

    handleGetTimeNest(){
        this.setState({ avail: this.state.avail+1 })
    }

    handleGetTime(e){
        e[0].play()
        setTimeout(() => {
            this.setState({ avail: this.state.avail+1 })
        }, 50000)
    }

    render(){
        if (this.state.avail>=2) {            
            this.props.video(true,null,0)
        }
        return(
            <Video enc1="¿Qué ganarás al terminar este recorrido?"
                videoFile={videoF}
                time={this.handleGetTime.bind(this)}
                nest={this.handleGetTimeNest.bind(this)}
                textDwn= 'Haz clic en el triángulo para ver el video.'
                textDwn2= 'Al finalizar recuerda recoger tu punto K.'
                callback={this.props.callback}
                puntos={this.props.puntos}
                wVideo='coinVideOne'
                clase='video'
                type='pdf'
            />
        )
    }
}