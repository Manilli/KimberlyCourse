import React, { Component } from 'react';
import Encabezado from './Encabezado'
import '../css/modVideo.css'
import coin from '../../assets/coin.png'
import PopLightBox from './PopLightBox'
import file from '../../assets/pdfs/1_Política_SGSST.pdf'
import btnPlay from '../../assets/Elements/btnPlayVideo.png'

export default class ModVideo extends Component {
    constructor(props){
        super(props)
        this.state = {
            clicked: false,
        }
        this.puntos = this.props.puntos
        this.btnP = 'contentBtn'
    }

    handleRun(){
        const video = document.getElementsByClassName('customVideo')
        this.props.time(video)
        this.setState({ clicked: true })
        this.btnP = 'contentBtnHidden'
    }

    acceptMethods = (openPopSugerencias) => {
        this.openPopSugerencias = openPopSugerencias;
    };

    handlePuntos(){
        this.props.callback(this.puntos + 600);
        this.props.nest(true)
    }

    render(){
        
        if (this.state.clicked) {
            this.mond =
                <div className="col Dwn" style={style.Dwn}>
                    <img className="coin" style={style.coin} onClick={() => {this.openPopSugerencias(this.props.wVideo); this.handlePuntos()}} src={coin} alt="i" width="15%" height="100%"/>
                    <p className="text">{this.props.textDwn2}</p>
                </div>
        }else{
            this.mond = 
                <div className="col Dwn">
                    <p className="text">{this.props.textDwn}</p>
                </div>
        }

        return(
            <div className="contenedor">
                <Encabezado encabe1={this.props.enc1} encabe2={this.props.enc2} />
                <PopLightBox shareMethods={this.acceptMethods} clase={this.props.clase} file={file} type={this.props.type} />
                <div className="row vid">
                    <div className="col">
                    <div className={this.btnP}><img src={btnPlay} className='btnPlay' /></div>
                    <video className="customVideo" onClick={this.handleRun.bind(this)}>
                        <source type="video/mp4" src={this.props.videoFile} /><span></span>
                    </video>
                    </div>
                </div>
                    {this.mond}
            </div>
        )
    }
}

const style = {
    Dwn: {
    position: 'relative',
    zIndex: 999,
    },
}