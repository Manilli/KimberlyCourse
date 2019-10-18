import React, { Component } from 'react';
import '../css/Carousell.css';
import {
  PopupboxManager,
  PopupboxContainer,
} from 'react-popupbox';
import '../../../node_modules/react-popupbox/dist/react-popupbox.css';
import coin from "../../assets/coin.png";
import arrowRight from "../../assets/right-arrow.png";
import arrowLeft from "../../assets/left-arrow.png";
// import {useTransition, animated} from 'react-spring'
import {Spring , animated, interpolate, Transition} from 'react-spring/renderprops'

export default class Carousell extends Component {
  constructor(props){
    super(props)
    this.puntos = this.props.puntos
  }

  openPopupbox() {
    const content = (
      <div>
        <div className="row">
          <img className="col-10" src="http://lorempixel.com/g/800/600/technics/2/" alt="hola"/>
          <img src={arrowRight} style={arrow} className="col-1" onClick={this.openPopupbox2.bind(this)} />
        </div><br/><br/>
        <span style={{color: 'white'}}>― Autor</span>
      </div>
    )
    PopupboxManager.open({ 
      content,
      config: {
        fadeIn:'true',
        fadeInSpeed:'1000',
        fadeOut:'true',
        fadeOutSpeed:'1000',
      }
    })
  }

  openPopupbox2() {
    const content = (
      <div>
        <div className="row">
          <img src={arrowLeft} style={arrow} className="col-1" onClick={this.openPopupbox.bind(this)} />
          <img className="col-10" src="http://lorempixel.com/g/800/600/technics/8/" alt="hola"/>
          <img src={arrowRight} style={arrow} className="col-1" onClick={this.openPopupbox3.bind(this)} />
        </div><br/><br/>
        <span style={{color: 'white'}}>― Autor 2</span>
      </div>
    )
    PopupboxManager.open({ 
      content,
      config: {
        fadeIn:'true',
        fadeInSpeed:'1000',
        fadeOut:'true',
        fadeOutSpeed:'1000',
      }
    })
  }

  openPopupbox3() {
    const content = (
      <div>
        <div className="row">
          <img src={arrowLeft} style={arrow} className="col-1" onClick={this.openPopupbox2.bind(this)} />
          <img className="col-10" src="http://lorempixel.com/g/800/600/technics/6/" alt="hola"/>
        </div><br/><br/>
        <span style={{color: 'white'}}>― Autor 3</span>
      </div>
    )
    PopupboxManager.open({ 
      content,
      config: {
        fadeIn:'true',
        fadeInSpeed:'1000',
        fadeOut:'true',
        fadeOutSpeed:'1000',
      }
    })
  }

  handlePuntos(){
    this.props.callback(this.puntos + 200);
  }

  render() {
    const items = [1,2,3]
    return (
      <div className="Main">
        <div className="main">
          <div>
            <button className="btn btn-custom" onClick={this.openPopupbox.bind(this)}>Click me</button>
            <PopupboxContainer />
            {/* <img src={coin} alt="" style={style} onClick={this.handlePuntos.bind(this)} /> */}

            <Spring
              to={{
                width: 100,
                padding: 0,
                // background: 'linear-gradient(to right, #30e8bf, #ff8235)',
                transform: 'translate3d(400px,-200px,-200px) scale(4) rotateX(45deg)',
                boxShadow: '0px 100px 150px -10px #2D3747',
                // borderBottom: '0px solid white',
                // shape: 'M20,380 L380,380 L380,380 L200,20 L20,380 Z',
                // textShadow: '0px 5px 0px white'
              }}
              from={{
                width: 100,
                padding: 20,
                // background: 'linear-gradient(to right, #009fff, #ec2f4b)',
                transform: 'translate3d(0px,0,0) scale(1.2) rotateX(0deg)',
                boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.4)',
                // borderBottom: '10px solid #2D3747',
                // shape: 'M20,20 L20,380 L380,380 L380,20 L20,20 Z',
                // textShadow: '0px 5px 15px rgba(255,255,255,0.5)'
              }}>
              {props => <div style={props}>hello</div>}
            </Spring>

          </div>
        </div>
      </div>
    )
  }
}

const style = {
  width: 100,
  height: 100,
  cursor: 'pointer',
}

const arrow = {
  alignSelf: 'center',
  width: 50,
  height: 50,
}