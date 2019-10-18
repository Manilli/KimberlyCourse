import React, { Component } from 'react';
import Video from '../modVideo'
import videoF from '../../../assets/Secuencia-02.mp4'
// import coin from '../../../assets/coin.png'
import aud from '../../../assets/hombre.mp3'

export default class Mod1o1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            avail: 0
        }
        this.song = new Audio(aud)
        this.ini = 607.5
        this.fin = 614
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
        this.props.video(null,null,null)
    }

    handleGetTimeNest(){
        this.setState({ avail: this.state.avail+1 })
    }

    handleGetTime(e){
        e[0].play()
        setTimeout(() => {
            this.props.video(null,null,0)
        }, 65000)
    }

    render(){
        return(
            <Video enc1="La alianza empresarial por el comercio seguro"
                videoFile={videoF}
                time={this.handleGetTime.bind(this)}
                nest={this.handleGetTimeNest.bind(this)}
                textDwn= 'Haz clic en el triángulo para ver el video.'
                textDwn2= 'Al finalizar recuerda recoger tu punto K.'
                puntos={this.props.puntos} 
                callback={this.props.callback}
                wVideo='coinVideTwo'
            />
        )
    }
}