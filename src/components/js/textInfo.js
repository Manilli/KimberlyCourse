import React, { Component } from 'react';
import coin from '../../assets/coin.png'
import PopLightBox from './PopLightBox'
import file from '../../assets/pdfs/3_Elementos_de_Protección_Personal.pdf'

export default class textInfo extends Component {
    constructor(props){
        super(props)
        this.puntos =  this.props.puntos
    }
    
    acceptMethods = (openPopSugerencias) => {
        this.openPopSugerencias = openPopSugerencias;
    };

    handlePuntos(){
        this.props.callback(this.puntos + 200);
    }

    render(){
        switch (this.props.caso) {
        case 1:
            this.mond1 = <img className="coin7" onClick={() => {this.openPopSugerencias(this.props.textCoinPop); this.handlePuntos()}} src={coin} width="90%" height="100%"/>
            break;
        case 2:
            this.mond2 = <img className="coin7" onClick={() => {this.openPopSugerencias(this.props.textCoinPop); this.handlePuntos()}} src={coin} width="90%" height="100%"/>
            break;
        default:
            this.mond1 = null
            this.mond2 = null
            break;
        }

        if (this.props.infor2==""||this.props.infor2==null) {
            this.infor2 = null
        }else {
            this.infor2 = <div className="row" style={style.info}>
                {this.props.infor2}
            </div>
        }

        // switch (this.props.caso) {
        //     case 1:
        //         if (this.props.textCoinPop=='' || this.props.textCoinPop==null || this.props.textCoinPop==undefined) 
        //             this.mond1 = <img className="coin7" type={this.props.type} onClick={() => {this.handlePuntos()}} src={coin} width="60%" height="80%"/>
        //         else
        //             this.mond1 = <img className="coin7" type={this.props.type} onClick={() => {this.openPopSugerencias(this.props.textCoinPop); this.handlePuntos()}} src={coin} width="60%" height="80%"/>
        //         break;
        //     case 2:
        //         if (this.props.textCoinPop=='' || this.props.textCoinPop==null || this.props.textCoinPop==undefined)
        //             this.mond2 = <img className="coin7" type={this.props.type} onClick={() => {this.handlePuntos()}} src={coin} width="60%" height="80%"/>
        //         else
        //             this.mond2 = <img className="coin7" type={this.props.type} onClick={() => {this.openPopSugerencias(this.props.textCoinPop); this.handlePuntos()}} src={coin} width="60%" height="80%"/>
        //         break;
        //     default:
        //         this.mond1 = null
        //         this.mond2 = null
        //         break;
        //     }

        return(

            // <div className="col" style={style.style}>
            //     <PopLightBox shareMethods={this.acceptMethods} clase={this.props.clase} type={this.props.type} file={file} flechas=''/>
            //     {this.mond1}
            //     <p style={style.info}>
            //         {this.props.infor}
            //         <br/><br/>{this.props.infor2}
            //     </p>
            //     {this.mond2}
            // </div>

            <div style={style.contInfo}>
                <PopLightBox shareMethods={this.acceptMethods} clase={this.props.clase} type={this.props.type} file={file} flechas=''/>
                {/*-----------------------------------------------------------------------------------------------*/}
                <div /*className="col"*/>
                    {this.mond1}
                </div>
                {/*-----------------------------------------------------------------------------------------------*/}
                <div /*className="col"*/>
                    <div className="row" style={style.info}>
                        {this.props.infor}
                    </div>
                    {this.infor2}
                </div>
                {/*-----------------------------------------------------------------------------------------------*/}
                <div /*className="col"*/>
                    {this.mond2}
                </div>
                {/*-----------------------------------------------------------------------------------------------*/}
            </div>
        )
    }
}

const style= {
    contInfo: {
        position: 'relative',
        maxWidth: 800,
        maxHeight: 150,
        display: 'inline-flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        margin: '0 auto',
        top: -15
    },

    info: {
        // width: '85%',
        // margin: '0 auto 10px',
        position: 'relative',
        fontFamily: 'Gotham',
        textAlign: 'left',
        fontSize: '19px',
        padding: '10px',
        margin: '0 auto',
        textAlign: 'left',
    },

    // style: {
    //     position: 'relative',
    //     maxWidth: '800px',
    //     maxHeight: 150,
    //     display: 'inline-flex',
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     textAlign: 'center',
    //     // color: '#808080',
    //     // fontStyle: 'italic',
    //     margin: '0 auto',
    //     top: -25,
    // },

    // textI: {
    //     // fontStyle: 'italic',
    //     position: 'relative',
    //     padding: '10px',
    //     margin: '0 auto',
    //     textAlign: 'left',
    // }
}