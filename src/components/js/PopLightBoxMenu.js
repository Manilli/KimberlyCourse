import React, { Component } from 'react';
import '../css/PopLightBoxMenu.css'
import '../../../node_modules/react-popupbox/dist/react-popupbox.css';
import $ from 'jquery'
import { PopupboxManager, PopupboxContainer, } from 'react-popupbox';

export default class PopLightBox extends Component {
    constructor(props) {
        super(props)
        this.state = {}
            this.avail1 = ''
            this.avail2 = ''
            this.avail3 = ''
            this.avail4 = ''
            this.avail5 = ''
            this.avail6 = ''
            this.avail7 = ''
            this.avail8 = ''        
    }

    componentDidMount() {
      this.props.shareMethodsMenu(this.openPopSugerencias.bind(this))
    }

    handleClickAvail(evt){
        this.props.goTo(evt)
    }

    openPopSugerencias(e) {
        const {pagina} = this.props
        if(pagina>=2){
            this.avail1 = 'avail'
            setInterval(()=>$('.intro').click(()=>{this.handleClickAvail(2)}), 100)
        }
        if(pagina>=9){
            this.avail2 = 'avail'
            setInterval(()=>$('.primer').click(()=>{this.handleClickAvail(9)}), 100)
        }
        if(pagina>=14){
            this.avail3 = 'avail'
            setInterval(()=>$('.segun').click(()=>{this.handleClickAvail(14)}), 100)
        }
        if(pagina>=25){
            this.avail4 = 'avail'
            setInterval(()=>$('.terc').click(()=>{this.handleClickAvail(25)}), 100)
        }
        if(pagina>=31){
            this.avail5 = 'avail'
            setInterval(()=>$('.caur').click(()=>{this.handleClickAvail(31)}), 100)
        }
        if(pagina>=37){
            this.avail6 = 'avail'
            setInterval(()=>$('.quin').click(()=>{this.handleClickAvail(37)}), 100)
        }
        if(pagina>=42){
            this.avail7 = 'avail'
            setInterval(()=>$('.sexto').click(()=>{this.handleClickAvail(42)}), 100)
        }
        if(pagina>=46){
            this.avail8 = 'avail'
            setInterval(()=>$('.septm').click(()=>{this.handleClickAvail(46)}), 100)
        }

        const content = (
            <div className={"componentMenu"}>
                <div className="contMenu">
                    <div className="row lista">
                        <li className={"itemLista intro "+this.avail1} >Introducción</li>
                        <li className={"itemLista primer "+this.avail2} >Primer elemento: los cimientos de la Ciudad Kimberly-Clark.</li>
                        <li className={"itemLista segun "+this.avail3} >Segundo elemento: el plano de la ciudad segura de Kimberly-Clark.</li>
                        <li className={"itemLista terc "+this.avail4} >Tercer elemento: los edificios de la ciudad Kimberly-Clark.</li>
                        <li className={"itemLista caur "+this.avail5} >Cuarto elemento: las ventanas y mampostería de los edificios en la ciudad Kimberly-Clark.</li>
                        <li className={"itemLista quin "+this.avail6} >Quinto elemento: Señalización en la ciudad Kimberly-Clark.</li>
                        <li className={"itemLista sexto "+this.avail7} >Sexto elemento: el urbanismo en la ciudad Kimberly-Clark</li>
                        <li className={"itemLista septm "+this.avail8} >Las personas que habitan la ciudad de Kimberly-Clark</li>
                    </div>
                </div>
            </div>
        )
        PopupboxManager.open({ 
            content,
            config: {
                titleBar: {
                    enable: true,
                    closeText: '',
                    closeButton: true,  
                    closeButtonClassName: "btnClosePop",
                },
                fadeIn:'true',
                fadeInSpeed:'600',
                fadeOut:'true',
                fadeOutSpeed:'600',
                onClosed:()=>{this.props.menu(false)}
            }
        })
    }

    render(){
        return(
          <PopupboxContainer />
        )
    }
}