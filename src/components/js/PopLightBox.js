import React, { Component } from 'react';
import '../css/PopLightBox.css'
import { PopupboxManager, PopupboxContainer, } from 'react-popupbox';
import '../../../node_modules/react-popupbox/dist/react-popupbox.css';
import pdfImg from "../../assets/Elements/iconPdf.png";
import exlImg from "../../assets/Elements/iconPdf.png";
import fRight from '../../assets/Elements/fRight.png'
import fLeft from '../../assets/Elements/fLeft.png'
import tryAgain from '../../assets/Elements/intenDeNuevo.png'
import tryAll from '../../assets/Elements/comenDeNuevo.png'

export default class PopLightBox extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
      this.props.shareMethods(this.openPopSugerencias.bind(this))
    }

    handleScreenPop(e) {
      this.props.screenPop(e)
      console.log(e)
    }

    openPopSugerencias(e) {
      if (this.props.type=="pdf")
        this.imgDown = pdfImg
      else if (this.props.type=="excel")
        this.imgDown = exlImg
      else
        this.imgDown = null

      if (this.props.type==null||this.props.type=='')
        this.archivo = null
      else
        this.archivo = <a href={this.props.file} className={"propFile"+this.props.clase} download={'Kimberly Clark '+this.props.type} target="_blank"><img src={this.imgDown} width="10%" height="100%" alt="i"/></a>

      setInterval(() => {
        // console.log(this.props.botonR)
        // console.log(e)
        if (this.props.botonR==='uno' && e==='cuidado') {
          this.botn = <div className="btnTryAgain"><img className="imgTryAgain" src={tryAgain} onClick={() => {console.log('hola1')}} /></div>
        }else if (this.props.botonR==='dos' && e==='cuidado') {
          this.botn = <div className="btnTryAgain"><img className="imgTryAgain" src={tryAll} onClick={() => {console.log('hola2')}} /></div>
        }else {
          this.botn = null
        }
      }, 1000);

      switch (e) {
        case 'Evac1':
          this.flechas = <div className="flechas"><img src={fLeft} className="fLeft" align="right" onClick={() => {this.handleScreenPop('fLeft')}} /></div>
          break;
        case 'Evac2':
          this.flechas = <div className="flechas"><img src={fRight} className="fRight" align="left" onClick={() => {this.handleScreenPop('fRight')}} /><img src={fLeft} className="fLeft" align="right" onClick={() => {this.handleScreenPop('fLeft')}} /></div>
          break;
        case 'Evac3':
          this.flechas = <div className="flechas"><img src={fRight} className="fRight" align="left" onClick={() => {this.handleScreenPop('fRight')}} /></div>
          break;
        case 'Evac4':
          this.flechas = <div className="flechas"><img src={fLeft} className="fLeft" align="right" onClick={() => {this.handleScreenPop('fLeft')}} /></div>
          break;
        case 'Evac5':
          this.flechas = <div className="flechas"><img src={fRight} className="fRight" align="left" onClick={() => {this.handleScreenPop('fRight')}} /></div>
          break;
        case 'Evac6':
          this.flechas = <div className="flechas"><img src={fLeft} className="fLeft" align="right" onClick={() => {this.handleScreenPop('fLeft')}} /></div>
          break;
        case 'Evac7':
          this.flechas = <div className="flechas"><img src={fRight} className="fRight" align="left" onClick={() => {this.handleScreenPop('fRight')}} /></div>
          break;
        case 'Evac8':
          this.flechas = <div className="flechas"><img src={fLeft} className="fLeft" align="right" onClick={() => {this.handleScreenPop('fLeft')}} /></div>
          break;
        case 'Evac9':
            this.flechas = <div className="flechas"><img src={fRight} className="fRight" align="left" onClick={() => {this.handleScreenPop('fRight')}} /></div>
            break;
        case 'Evac10':
          this.flechas = <div className="flechas"><img src={fLeft} className="fLeft" align="right" onClick={() => {this.handleScreenPop('fLeft')}} /></div>
          break;
        case 'Evac11':
          this.flechas = <div className="flechas"><img src={fRight} className="fRight" align="left" onClick={() => {this.handleScreenPop('fRight')}} /></div>
          break;
        case 'Evac12':
          this.flechas = <div className="flechas"><img src={fLeft} className="fLeft" align="right" onClick={() => {this.handleScreenPop('fLeft')}} /></div>
          break;
        case 'Evac13':
          this.flechas = <div className="flechas"><img src={fRight} className="fRight" align="left" onClick={() => {this.handleScreenPop('fRight')}} /></div>
          break;
        case 'Evac14':
          this.flechas = <div className="flechas"><img src={fLeft} className="fLeft" align="right" onClick={() => {this.handleScreenPop('fLeft')}} /></div>
          break;
        case 'Evac15':
          this.flechas = <div className="flechas"><img src={fRight} className="fRight" align="left" onClick={() => {this.handleScreenPop('fRight')}} /></div>
          break;
        case 'Evac16':
          this.flechas = <div className="flechas"><img src={fLeft} className="fLeft" align="right" onClick={() => {this.handleScreenPop('fLeft')}} /></div>
          break;
        case 'Evac17':
          this.flechas = <div className="flechas"><img src={fRight} className="fRight" align="left" onClick={() => {this.handleScreenPop('fRight')}} /><img src={fLeft} className="fLeft" align="right" onClick={() => {this.handleScreenPop('fLeft')}} /></div>
          break;
        case 'Evac18':
          this.flechas = <div className="flechas"><img src={fRight} className="fRight" align="left" onClick={() => {this.handleScreenPop('fRight')}} /></div>
          break;
        case 'Evac19':
          this.flechas = <div className="flechas"><img src={fLeft} className="fLeft" align="right" onClick={() => {this.handleScreenPop('fLeft')}} /></div>
          break;
        case 'Evac20':
          this.flechas = <div className="flechas"><img src={fRight} className="fRight" align="left" onClick={() => {this.handleScreenPop('fRight')}} /><img src={fLeft} className="fLeft" align="right" onClick={() => {this.handleScreenPop('fLeft')}} /></div>
          break;
        case 'Evac21':
          this.flechas = <div className="flechas"><img src={fRight} className="fRight" align="left" onClick={() => {this.handleScreenPop('fRight')}} /></div>
          break;
        case 'Evac22':
          this.flechas = <div className="flechas"><img src={fLeft} className="fLeft" align="right" onClick={() => {this.handleScreenPop('fLeft')}} /></div>
          break;
        case 'Evac23':
          this.flechas = <div className="flechas"><img src={fRight} className="fRight" align="left" onClick={() => {this.handleScreenPop('fRight')}} /></div>
          break;
        case 'Evac24':
          this.flechas = <div className="flechas"><img src={fLeft} className="fLeft" align="right" onClick={() => {this.handleScreenPop('fLeft')}} /></div>
          break;
        case 'Evac25':
          this.flechas = <div className="flechas"><img src={fRight} className="fRight" align="left" onClick={() => {this.handleScreenPop('fRight')}} /><img src={fLeft} className="fLeft" align="right" onClick={() => {this.handleScreenPop('fLeft')}} /></div>
          break;
        case 'Evac26':
          this.flechas = <div className="flechas"><img src={fRight} className="fRight" align="left" onClick={() => {this.handleScreenPop('fRight')}} /></div>
          break;
      }

      if(this.props.btnClose==undefined)
        this.btnClose = true
      else
        this.btnClose = false

        // {setInterval(() => {
        //   this.botn = this.botn
        // }, 1000)}

      const content = (
        <div className={"popOne"+e}>
          <div className="contPop">
            {this.flechas}
            {this.archivo}
            {this.botn}
          </div>
        </div>
      )
      PopupboxManager.open({ 
        content,
        config: {
          titleBar: {
              enable: this.btnClose,
              closeText: '',
              closeButton: true,  
              closeButtonClassName: "btnClosePop",
          },
          fadeIn:'true',
          fadeInSpeed:'600',
          fadeOut:'true',
          fadeOutSpeed:'600',
        }
      })
    }

    render(){
        return(
          <PopupboxContainer />
        )
    }
}