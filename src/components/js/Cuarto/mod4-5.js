import React, { Component } from 'react'
import '../../css/Cuarto/mod4-5.css'
import Encabezado from '../Encabezado'
import PopLightBox from '../PopLightBox'
import LineTo from 'react-lineto';
import aud from '../../../assets/hombre.mp3'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            selec: [],
            x: 1,
            y: 1,
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
        this.song = new Audio(aud)
        this.ini = 512
        this.fin = 523.5
    }

    acceptMethods = (openPopSugerencias) => {
        this.openPopSugerencias = openPopSugerencias;
    };

    componentDidMount(){
        this.props.audio(null,null,null)
        
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
        },100)
    }

    componentWillUnmount(){
        this.props.audio(false,null,null)
        
        this.ini = 0
        this.fin = 0
    }

    handleSelected(evt){
        let selec = evt.target.id
        const { x } = this.state
        this.setState({selec: this.state.selec.concat(selec)})

        switch(x) {
            case 1:
                this.firstIn = selec
                this.setState({x:2})
                break;
            case 2:
                this.secondIn = selec
                this.setState({x:3})
                break;
            case 3: 
                this.tirthIn = selec
                break;
        }
    }

    handleSelectedUp(evt){
        let pair = evt.target.id
        const { y } = this.state
        this.setState({pair: this.state.pair.concat(pair)})

        switch(y) {
            case 1:
                this.firstOut = pair
                this.setState({y:2})
                break;
            case 2:
                this.secondOut = pair
                this.setState({y:3})
                break;
            case 3: 
                this.tirthOut = pair
                break;
        }
    }

    render(){
        const {selec, pair, correct} = this.state
        let pre = []

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
                    this.setState({x: 1})
                    this.setState({y: 1})
                }
            }
        }

        return(
            <div className="contenedor">
                <Encabezado camb={1} encabe1="Identificación y señalización de los productos químicos" />
                <PopLightBox style={{position: 'relative', zIndex: 2}} shareMethods={this.acceptMethods} />
                <div className="row contenidoAlmacen">
                    <div className="row info" style={style.info}>
                        <p className="text" style={style.infoIn}>Si contestas las siguientes preguntas adecuadamente, podrás obtener más Puntos K que te permitirán continuar con la construcción de la Ciudad Kimberly-Clark.</p>
                        {/* <p className="text" style={style.infoIn2}>Asocia cada una de las preguntas con la respuesta que consideres pertinente.</p> */}
                        <p className="text" style={style.infoIn2}>Selecciona una pregunta y dale clic a la respuesta que consideres sea la correcta.</p>
                        <p className="text"><span style={style.textAz}>¡Comienza ahora!</span></p>
                    </div>
                    <div className="row Empareja">
                        <div className="col-5">
                            <div className="row contB"><p id="comp1" onMouseDown={this.handleSelected.bind(this)} className="text comp1">¿Qué debe tener la etiqueta de una sustancia química?</p></div>
                            <div className="row contB"><p id="comp2" onMouseDown={this.handleSelected.bind(this)} className="text comp2">¿Qué elementos deben mantenerse en el almacenamiento de productos químicos?</p></div>
                            <div className="row contB"><p id="comp3" onMouseDown={this.handleSelected.bind(this)} className="text comp3">¿Qué pictogramas pueden utilizarse en la etiqueta?</p></div>
                        </div>
                        <div className="col-1">
                            <LineTo from={this.firstIn} to={this.firstOut} zIndex={-1} borderColor="#753BB5" borderWidth="3px" borderStyle={"dotted"} />
                            <LineTo from={this.secondIn} to={this.secondOut} zIndex={-1} borderColor="#753BB5" borderWidth="3px" borderStyle={"dotted"} />
                            <LineTo from={this.tirthIn} to={this.tirthOut} zIndex={-1} borderColor="#753BB5" borderWidth="3px" borderStyle={"dotted"} />
                        </div>
                        <div className="col-6">
                            <div className="row contW"><p id="par1" onMouseUp={this.handleSelectedUp.bind(this)} className="text par1">Material absorbente, cinta, masilla, guantes nitrilo, bolsas rojas, respiradores, pala antichispa, traje tyvek y gafas de seguridad.</p></div>
                            <div className="row contW"><p id="par2" onMouseUp={this.handleSelectedUp.bind(this)} className="text par2">Toxicidad, explosivo, autoreactivo, peróxido orgánico.</p></div>
                            <div className="row contW"><p id="par3" onMouseUp={this.handleSelectedUp.bind(this)} className="text par3">Nombre, pictograma, indicaciones de peligro y prudencia e información del proveedor.</p></div>
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