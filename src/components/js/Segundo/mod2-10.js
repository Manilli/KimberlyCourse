import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import PopLightBox from '../PopLightBox'
import Mcq from '../../DefaultQuest/Mcq'
import Mcq1 from '../../DefaultQuest/Mcq1'
import Scorm from '../../../scorm/Scorm';
import aud from '../../../assets/hombre.mp3'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.state={
            point: 0,
            assessment: [],
            cant: 1
        }
        this.cont = 0
        this.song = new Audio(aud)
        this.ini = 350.5
        this.fin = 360

    }

    componentDidMount(){
        this.props.audio(false,null,null)
        
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

    updateAssesment(correct, response) {
        this.setState({assessment: this.state.assessment.concat([correct])});
        Scorm.submitMCQ(correct, response);
        if (this.state.assessment.length==1) {
            setTimeout(() => {
                this.setState({cant: 2})
            }, 1000)
        }
    }

    acceptMethods = (openPopSugerencias) => {
        this.openPopSugerencias = openPopSugerencias;
    };

    render(){
        let {cant} =this.state
        let corr = []
        const {assessment} = this.state

        assessment.map(i=>{
            if (i) {
                corr.push(i)
            }
        })

        if (assessment.length>=4) {
            if(corr.length>=2) {
                this.openPopSugerencias('Question1Bien')
                this.props.audio(true,null,0)
                this.setState({assessment: []})
            }else {
                this.openPopSugerencias('Question1Cuidado')
                this.props.audio(null,null,null)
                this.setState({assessment: []})
                this.setState({cant: 1})
            }
        }

        switch (cant) {
            case 1:
                this.qstn = <div className="row contenido9">
                    <Mcq 
                        result={this.updateAssesment.bind(this)} 
                        question="El peligro o factor de riesgo, es aquella condición que tiene la potencialidad de causar un daño." 
                        correctAnswer={0}
                        answers={["Verdadero","Falso"]}
                    /> 
                    <Mcq 
                        result={this.updateAssesment.bind(this)} 
                        question="Un impacto ambiental es la consecuencia de cualquier cambio en el medio ambiente, ya sea positivo o negativo." 
                        correctAnswer={0}
                        answers={["Verdadero","Falso"]}
                    />
                </div>
            break;
            case 2:
                this.qstn = <div className="row contenido9">
                    <Mcq1 
                        result={this.updateAssesment.bind(this)} 
                        question="Para notificar la emergencia puedes pulsar manualmente las alarmas (señales sonoras), llamar a la línea exclusiva de emergencia -454-7320- o usar el sistema de telecomunicaciones. " 
                        correctAnswer={0}
                        answers={["Verdadero","Falso"]}
                    />
                    <Mcq1
                        result={this.updateAssesment.bind(this)} 
                        question="En Kimberly-Clark  no se tienen los sistemas de protección al ruido, protección respiratoria y el de ergonomía." 
                        correctAnswer={1}
                        answers={["Verdadero","Falso"]}
                    />
                </div>
            break;
        }

        return(
            <div className="contenedor">
                <Encabezado camb={1} encabe1="Es hora de evaluar lo que has aprendido"/>
                <PopLightBox shareMethods={this.acceptMethods}/>
                <div className="contextoEval" >
                    <div className="row info" style={style.info}>
                        <p className="text">Define si las siguientes afirmaciones son falsas o verdaderas."</p>
                        <p className="text"><span style={style.textAz}>¡Comienza!</span></p>
                    </div>
                    {this.qstn}
                    <p className="cant" style={style.cont} >{cant}/2</p>
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
    },

    textAz: {
        fontSize: '25px',
        fontWeight: 'bold',
        fontFamily: 'Gotham',
        color: '#4080C0',
    },

    cont: {
        top: 35
    }
}