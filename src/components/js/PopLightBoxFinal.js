import React, { Component } from 'react';
import '../css/PopLightBoxFinal.css'
import { PopupboxManager, PopupboxContainer, } from 'react-popupbox';
import '../../../node_modules/react-popupbox/dist/react-popupbox.css';
import tryAgain from '../../assets/Elements/intenDeNuevo.png'
import tryAll from '../../assets/Elements/comenDeNuevo.png'
import $ from 'jquery'

export default class PopLightBox extends Component {
    constructor(props) {
        super(props)
        this.state= {
            try: tryAgain,
            tryName: '',
            btnClose: true,
        }
    }

    componentDidMount() {
      this.props.shareMethods(this.openPopSugerencias.bind(this))
    }

    handleGoAgain(evt, from){
        if (evt<2 && from == 'TryAgain') {
            this.props.goBack(49)
        }else if (evt>=2 && from == 'TryAll') {
            this.props.goBack(1)
        }
        PopupboxManager.close()
    }

    openPopSugerencias(e) {
      setInterval(() => {
        if (this.props.intento==1 && e=='Question2Cuidado') {
            this.setState({try: tryAgain})
            this.setState({btnClose: true})
            this.setState({tryName: 'TryAgain'})
        }else if (this.props.intento==2 && e=='Qstn2Cuidado') {
            this.setState({try: tryAll})
            this.setState({btnClose: false})
            this.setState({tryName: 'TryAll'})
        }else {
          this.botn = null
        }
      }, 1000);

      if (e=="Question2Bien")
        this.btnWrong = ""
      else
        this.btnWrong = <div className="btnTryAgain"><img className="imgTryAgain" src={this.state.try} /></div>

      // if(this.props.btnClose==undefined)
      //   this.btnClose = true
      // else
      //   this.btnClose = false

        console.log(this.state.btnClose)

      setInterval(() => {$('.imgTryAgain').click(()=>this.handleGoAgain(this.props.intento, this.state.tryName))}, 1000)

      const content = (
        <div className={"popOne"+e}>
          <div className="contPop">
          {this.btnWrong}
          </div>
        </div>
      )
      PopupboxManager.open({ 
        content,
        config: {
          titleBar: {
              enable: this.state.btnClose,
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