import React, { Component } from 'react';
import Encabezado from './Encabezado'
import '../css/screen3.css'
import Cart0 from '../../assets/Elements/cart0.png'
import Cart1 from '../../assets/Elements/cart1.png'
import Cart2 from '../../assets/Elements/cart2.png'
import aud from '../../assets/hombre.mp3'

export default class Screen2 extends Component {
    constructor(props){
        super(props)
        this.state = {
            cart: -1,
            avail: false,
        }
        this.song = new Audio(aud)
        this.ini = 51.5
        this.fin = 54.5

        this.song.currentTime=this.ini
        this.song.play()
        setInterval(()=>{
            console.log(this.song.currentTime)
            if (this.song.currentTime==this.song.duration) {
                this.song.stop()
            }else if (this.song.currentTime>this.fin) {
                this.song.pause()
                if (this.fin!=null && this.ini!=54) {
                    this.setState({conti: true})
                }
            }
        },1000)
    }

    handleCart(){
        this.setState({cart:0})
        this.props.audio(true,55.5,106)
    }

    componentDidMount(){
        this.props.audio(null, null, null)
    }

    handleFrstAudio(){
        this.setState({cart:0})
        this.props.audio(true,55.5,106)
        this.setState({avail: true})
    }

    handleScndAudio(){
        this.setState({cart:1})
        this.props.audio(true,106.5,150)
        this.setState({avail: false})
    }

    render(){

        if (this.state.cart==-1) {
            return(
                <div className="contenedor">
                    <Encabezado encabe1="Kimberly-Clark" />
                    <div className="cart0" onClick={()=>{/* this.handleCart(); */this.handleFrstAudio() }} >
                        <img src={Cart0} width="600px" />
                    </div>
                </div>
            )
        }
        else if(this.state.cart==0) {
            return(
                <div className="contenedor">
                    <Encabezado encabe1="Kimberly-Clark" />
                    <div className="cart1" onClick={()=>{/* this.handleCart(); */this.handleScndAudio() }}>
                        <img src={Cart1} width="900px" height="500px" />
                    </div>
                </div>
            )
        }
        else if(this.state.cart==1) {
            return(
                <div className="contenedor">
                    <Encabezado encabe1="Kimberly-Clark" />
                    <div className="cart2" onClick={()=>{this.handleCart()}}>
                        <img src={Cart2} width="900px" height="500px" />
                    </div>
                </div>
            )
        }
    }
}