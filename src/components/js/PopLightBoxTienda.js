import React, { Component } from 'react';
import '../css/PopLightBoxTienda.css'
import '../../../node_modules/react-popupbox/dist/react-popupbox.css';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import itemMensaje from '../../assets/Tienda/mensaje.png'
import fRight from '../../assets/Elements/fRight.png'
import fLeft from '../../assets/Elements/fLeft.png'
import Slider from './slide'

export default class PopLightBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
          complet: 0,
          nivel: '',
          nivelUno: [['itemMap1', 0, 200], ['itemMap2', 1, 200], ['itemMap3', 2, 200], ['itemMap4', 3, 200], ['itemMap5', 4, 100], ['itemMap6', 5, 200], ['itemMap7', 6, 100],],
          nivelDos: [['itemMap8', 0, 200], ['itemMap9', 1, 200], ['itemMap10', 2, 200], ['itemMap11', 3, 200], ['itemMap12', 4, 100], ['itemMap13', 5, 200], ['itemMap14', 6, 100],],
          nivelTres: [['itemMap15', 0, 200], ['itemMap16', 1, 200], ['itemMap17', 2, 200], ['itemMap18', 3, 200], ['itemMap20', 4, 200]],
          nivelCuatro: [['itemMap22', 0, 200], ['itemMap23', 1, 200], ['itemMap24', 2, 200], ['itemMap25', 3, 200], ['itemMap26', 4, 100], ['itemMap27', 5, 200], ['itemMap28', 6, 100],],
          nivelCinco: [['itemMap29', 0, 200], ['itemMap30', 1, 200], ['itemMap31', 2, 200], ['itemMap32', 3, 200], ['itemMap33', 4, 100], ['itemMap34', 5, 200], ['itemMap35', 6, 100],],
        }
        this.pos = 1;
        this.puntos = this.props.puntos
    }

    componentDidMount() {
      let {lugar, valid} = this.props
      this.props.shareMethods(this.openPopSugerencias.bind(this))
      if(lugar<14){
        this.setState({ nivel: this.state.nivelUno })
        valid.forEach(i=>{
          delete this.state.nivelUno[i]
        })
      }
      if(lugar>=14 && lugar<25){
        this.setState({ nivel: this.state.nivelDos })
        valid.forEach(i=>{
          delete this.state.nivelDos[i]
        })
      }
      if(lugar>=25 && lugar<32){
          // delete this.state.nivelTres[4]
          // delete this.state.nivelTres[6]
          this.setState({ nivel: this.state.nivelTres })
        valid.forEach(i=>{
          delete this.state.nivelTres[i]
        })
      }
      if(lugar>=32 && lugar<38){
        this.setState({ nivel: this.state.nivelCuatro })
        valid.forEach(i=>{
          delete this.state.nivelCuatro[i]
        })
      }
      if(lugar>=38){
        this.setState({ nivel: this.state.nivelCinco })
        valid.forEach(i=>{
          delete this.state.nivelCinco[i]
        })
      }
    }

    componentWillUnmount(){
      let {lugar} = this.props
      const { nivelUno, nivelDos, nivelTres, nivelCuatro, nivelCinco } = this.state
      this.nivelActual = ''
      if(lugar<14){
        this.nivelActual = nivelUno
      }
      if(lugar>=14){
        this.nivelActual = nivelDos
      }
      if(lugar>=25){
        this.nivelActual = nivelTres
      }
      if(lugar>=32){
        this.nivelActual = nivelCuatro
      }
      if(lugar>=38){
        this.nivelActual = nivelCinco
      }
      this.props.actual(this.nivelActual)
    }

    handleCant(evt){
      if(evt<=1)
        PopupboxManager.close()
    }

    handleGetCards(evt, price){
      if (this.puntos>=price&&this.state.nivel[evt][0]=='itemMap20') {
        this.props.compro(evt+1)
      }else if(this.puntos>=price){
        this.props.compro(evt)
      }

      if (this.state.nivel[evt][0]=='itemMap1'||this.state.nivel[evt][0]=='itemMap2'||this.state.nivel[evt][0]=='itemMap3'||this.state.nivel[evt][0]=='itemMap4'||this.state.nivel[evt][0]=='itemMap5'||this.state.nivel[evt][0]=='itemMap6'||this.state.nivel[evt][0]=='itemMap7') {
        if (this.puntos>=price) {
          delete this.state.nivelUno[evt]
          this.puntos = this.puntos - price
        }
      }else if (this.state.nivel[evt][0]=='itemMap8'||this.state.nivel[evt][0]=='itemMap9'||this.state.nivel[evt][0]=='itemMap10'||this.state.nivel[evt][0]=='itemMap11'||this.state.nivel[evt][0]=='itemMap12'||this.state.nivel[evt][0]=='itemMap13'||this.state.nivel[evt][0]=='itemMap14') {
        if (this.puntos>=price) {
          delete this.state.nivelDos[evt]
          this.puntos = this.puntos - price
        }
      }else if (this.state.nivel[evt][0]=='itemMap15'||this.state.nivel[evt][0]=='itemMap16'||this.state.nivel[evt][0]=='itemMap17'||this.state.nivel[evt][0]=='itemMap18'||this.state.nivel[evt][0]=='itemMap20') {
        if (this.puntos>=price) {
          delete this.state.nivelTres[evt]
          this.puntos = this.puntos - price
        }
      }else if (this.state.nivel[evt][0]=='itemMap22'||this.state.nivel[evt][0]=='itemMap23'||this.state.nivel[evt][0]=='itemMap24'||this.state.nivel[evt][0]=='itemMap25'||this.state.nivel[evt][0]=='itemMap26'||this.state.nivel[evt][0]=='itemMap27'||this.state.nivel[evt][0]=='itemMap28') {
        if (this.puntos>=price) {
          delete this.state.nivelCuatro[evt]
          this.puntos = this.puntos - price
        }
      }else if (this.state.nivel[evt][0]=='itemMap29'||this.state.nivel[evt][0]=='itemMap30'||this.state.nivel[evt][0]=='itemMap31'||this.state.nivel[evt][0]=='itemMap32'||this.state.nivel[evt][0]=='itemMap33'||this.state.nivel[evt][0]=='itemMap34'||this.state.nivel[evt][0]=='itemMap35') {
        if (this.puntos>=price) {
          delete this.state.nivelCinco[evt]
          this.puntos = this.puntos - price
        }
      }
    }

    openPopSugerencias(e) {

      this.left = <img src={fRight} className="fRightT" align="left" />
      this.right = <img src={fLeft} className="fLeftT" align="right" />

      const content = (
        <div className={"popBox "+e}>
          <div className="contPopBox">
            <div className="mensaje">
              <img src={itemMensaje} className="msg"/>
            </div>
            <div className="contentItemsShop">
              <Slider 
                left={this.left} 
                right={this.right} 
                comp={this.state.nivel}
                funct={this.handleGetCards.bind(this)}
                puntos={this.puntos}
                cant={this.state.nivel}
                funCant={this. handleCant.bind(this)}
                valid={this.props.valid}
              />
            </div>
          </div>
        </div>
      )
      PopupboxManager.open({ 
        content,
        config: {
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