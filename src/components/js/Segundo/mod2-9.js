import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import TextInfo from '../textInfo'
// import TextDown from '../textDown'
import '../../css/Segundo/mod2-9.css'
import preven from '../../../assets/Elements/bgPrevenciones.png'
import point from '../../../assets/Elements/point.png'
import textPoint1 from '../../../assets/Elements/textPoint1.png'
import textPoint2 from '../../../assets/Elements/textPoint2.png'
import textPoint3 from '../../../assets/Elements/textPoint3.png'
import aud from '../../../assets/hombre.mp3'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.state={
            point: 0,
            hide1: 'hide',
            hide2: 'hide',
            hide3: 'hide',
            disp: 0,
        }
        this.song = new Audio(aud)
        this.ini = 346
        this.fin = 350

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
    
    handlePoint(e){
        if (e=='textPoint1') {
            this.setState({hide1: ''})
            this.setState({disp: this.state.disp+1})
        }

        if (e=='textPoint2') {
            this.setState({hide2: ''})
            this.setState({disp: this.state.disp+1})
        }

        if (e=='textPoint3') {
            this.setState({hide3: ''})
            this.setState({disp: this.state.disp+1})
        }
    }

    render(){

        if (this.state.disp>=3) {
            this.props.audio(true,null,0)
        }

        return(
            <div className="contenedor">
                <Encabezado encabe1="Prevención de adicciones"/>
                <div className="contexto7">
                    <TextInfo infor="Además de las condiciones de promoción de salud, se deben tener en cuenta las actividades de prevención de adicciones que la empresa contratista debe cumplir para hacer parte de Kimberly-Clark, estas son:" />
                    <div className="row contenido9">
                        <img src={preven} className="bgPrev" />
                        
                        {/****************************************************************************************************/}
                        
                        <div className="row">
                            <div className="col-6">
                                {/* {this.coment1} */}
                                <img src={textPoint1} className={'textPoint1 '+this.state.hide1}/>
                            </div>
                            <div className="col-6">
                                <img src={textPoint2} className={'textPoint2 '+this.state.hide2}/>
                                {/* {this.coment2} */}
                            </div>
                            <div className="col" />
                        </div>
                        
                        {/****************************************************************************************************/}
                        
                        <div className="row btnClick">
                            <div className="col-4">
                                <img src={point} onClick={()=>{this.handlePoint('textPoint1')}} className="point1"/>
                            </div>
                            <div className="col-4">
                                <img src={point} onClick={()=>{this.handlePoint('textPoint2')}} className="point2"/>
                            </div>
                            <div className="col-4">
                                <img src={point} onClick={()=>{this.handlePoint('textPoint3')}} className="point3"/>
                            </div>
                        </div>
                        
                        {/****************************************************************************************************/}
                        
                        <div className="row">
                            <div className="col-4" />
                            <div className="col-4" />
                            <div className="col">
                                <img src={textPoint3} className={'textPoint3 '+this.state.hide3}/>
                                {/* {this.coment3} */}
                            </div>
                        </div>

                        {/****************************************************************************************************/}

                    </div>
                </div>
            </div>
        )
    }
}
