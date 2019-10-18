import React, { Component } from 'react';
import Encabezado from '../Encabezado'
// import TextInfo from '../textInfo'
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
        this.ini = 428.5
        this.fin = 438
    }

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

    acceptMethods = (openPopSugerencias) => {
        this.openPopSugerencias = openPopSugerencias;
    };

    updateAssesment(correct, response) {
        this.setState({assessment: this.state.assessment.concat([correct])});
        Scorm.submitMCQ(correct, response);
        if (this.state.assessment.length==1) {
            setTimeout(() => {
                this.setState({cant: 2})
            }, 1000)
        }
    }

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
                this.setState({assessment: []})
                this.props.audio(true,null,0)
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
                        question="¿La sigla TAR significa Tareas de Alto Riesgo?" 
                        correctAnswer={0} 
                        answers={["Si","No"]}
                    />
                    <Mcq 
                        result={this.updateAssesment.bind(this)} 
                        question="¿Para ejecutar TAR requieres permisos específicos y estar entrenado en cada uno de ellos?" 
                        correctAnswer={0}
                        answers={["Si","No"]}
                    />
                </div>
            break;
            case 2:
                this.qstn = <div className="row contenido9">
                    <Mcq1 
                        result={this.updateAssesment.bind(this)} 
                        question="¿Podrás ingresar a un espacio confinado en cualquier momento o circunstancia?." 
                        correctAnswer={1}
                        answers={["Si","No"]}
                    />
                    <Mcq1 
                        result={this.updateAssesment.bind(this)} 
                        question="¿Para validar tus certificaciones deberás capacitarte en una institución que sea reconocida por el Ministerio para formar personas en Tareas de Alto Riesgo?" 
                        correctAnswer={0}
                        answers={["Si","No"]}
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
                        <p className="text">Lee con atención las siguientes afirmaciones y responde sí o no.</p>
                        <p className="text"><span style={style.textAz}>¡Comienza ahora!</span></p>
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