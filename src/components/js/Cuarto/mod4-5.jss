import React, { Component } from 'react'
import '../../css/Cuarto/mod4-5.css'
import Encabezado from '../Encabezado'
import PopLightBox from '../PopLightBox'
import $ from 'jquery'
// import Drag from './Drag'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            selec: [],
            pair: [],
            correct: [["comp1", "par3"], ["comp2", "par1"], ["comp3", "par2"]],
            complete: [],
            from1o1: 0,
            to1o1: 0,
            from1o2: 10,
            to1o2: 10,
            from2o1: 0,
            to2o1: 0,
            from2o2: 0,
            to2o2: 0,
            from3o1: 0,
            to3o1: 0,
            from3o2: 0,
            to3o2: 0,
        }
        this.items = []
        this.puntos = this.props.puntos
    }

    acceptMethods = (openPopSugerencias) => {
        this.openPopSugerencias = openPopSugerencias;
    };

    componentDidMount(){
        this.props.audio(null,null,null)
    }

    handleSelected(evt){
        let selec = evt.target.id
        let x = evt.clientX
        let y = evt.clientY
        this.setState({selec: this.state.selec.concat(selec)})

        if (selec=="comp1") {
            this.setState({from1o1: x})
            this.setState({from1o2: y})
        }
        
        if (selec=="comp2") {
            this.setState({from2o1: x})
            this.setState({from2o2: y})
        }

        if (selec=="comp3") {
            this.setState({from3o1: x})
            this.setState({from3o2: y})
        }
    }

    handleSelectedUp(evt){
        let pair = evt.target.id
        let x = evt.clientX
        let y = evt.clientY
        this.setState({pair: this.state.pair.concat(pair)})

        if (pair=="par1") {
            this.setState({to1o1: x})
            this.setState({to1o2: y})
        }
        
        if (pair=="par2") {
            this.setState({to2o1: x})
            this.setState({to2o2: y})
        }

        if (pair=="par3") {
            this.setState({to3o1: x})
            this.setState({to3o2: y})
        }
    }

    render(){
        const {selec, pair, correct} = this.state
        let pre = []
        let success = []

        if (pair.length>=3) {
            pre.push([selec[0],pair[0]])
            pre.push([selec[1],pair[1]])
            pre.push([selec[2],pair[2]])

            for (let i = 0; i < pre.length; i++) {
                if (correct[i][0]==pre[i][0] && correct[i][1]==pre[i][1]){
                    this.openPopSugerencias('Question1Bien')
                    this.props.audio(this,null,0)
                    this.setState({selec: []})
                    this.setState({pair: []})
                }else {
                    this.openPopSugerencias('Question1Cuidado')
                    this.setState({selec: []})
                    this.setState({pair: []})
                }
            }
        }

        return(
            <div className="contenedor">
                <Encabezado camb={1} encabe1="Identificación y señalización de los productos químicos" />
                <PopLightBox shareMethods={this.acceptMethods} />
                <div className="row contenidoAlmacen">
                    <div className="row info" style={style.info}>
                        <p className="text" style={style.infoIn}>Si contestas las siguientes preguntas adecuadamente, podrás obtener más Puntos K que te permitirán continuar con la construcción de la Ciudad Kimberly-Clark.</p>
                        <p className="text" style={style.infoIn2}>Asocia cada una de las preguntas con la respuesta que consideres pertinente.</p>
                        <p className="text"><span style={style.textAz}>¡Comienza ahora!</span></p>
                    </div>
                    <div className="row Empareja">
                        {/* <div className="col-5">
                            <Drag lado='B' items={['¿Qué debe tener la etiqueta de una sustancia química?',
                                        '¿Qué elementos deben mantenerse en el almacenamiento de productos químicos?',
                                        '¿Qué pictogramas pueden utilizarse en la etiqueta?']} />
                        </div> */}
                        <div className="col-5">
                            <div className="row contB"><p id="comp1" onMouseDown={this.handleSelected.bind(this)} className="text">¿Qué debe tener la etiqueta de una sustancia química?</p></div>
                            <div className="row contB"><p id="comp2" onMouseDown={this.handleSelected.bind(this)} className="text">¿Qué elementos deben mantenerse en el almacenamiento de productos químicos?</p></div>
                            <div className="row contB"><p id="comp3" onMouseDown={this.handleSelected.bind(this)} className="text">¿Qué pictogramas pueden utilizarse en la etiqueta?</p></div>
                        </div>
                        <div className="col-1"><svg id="graph"></svg></div>
                        {/* <div className="col-6">
                            <Drag lado='W' items={['Material absorbente, cinta, masilla, guantes nitrilo, bolsas rojas, respiradores, pala antichispa, traje tyvek y gafas de seguridad.',
                                        'Toxicidad, explosivo, autoreactivo, peróxido orgánico.',
                                        'Nombre, pictograma, indicaciones de peligro y prudencia e información del proveedor.']} />
                        </div> */}
                        <div className="col-6">
                            <div className="row contW"><p id="par1" onMouseUp={this.handleSelectedUp.bind(this)} className="text">Material absorbente, cinta, masilla, guantes nitrilo, bolsas rojas, respiradores, pala antichispa, traje tyvek y gafas de seguridad.</p></div>
                            <div className="row contW"><p id="par2" onMouseUp={this.handleSelectedUp.bind(this)} className="text">Toxicidad, explosivo, autoreactivo, peróxido orgánico.</p></div>
                            <div className="row contW"><p id="par3" onMouseUp={this.handleSelectedUp.bind(this)} className="text">Nombre, pictograma, indicaciones de peligro y prudencia e información del proveedor.</p></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const style = {
    info: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
    },

    infoIn: {
        textAlign: 'center',
    },

    infoIn2: {
        position: 'relative',
        top: -6
    },

    textAz: {
        position: 'relative',
        fontSize: '22px',
        fontWeight: 'bold',
        fontFamily: 'Gotham',
        color: '#4080C0',
        top: -10,
    },
}