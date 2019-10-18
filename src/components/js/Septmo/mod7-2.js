import React, { Component } from 'react';
import Mcq from '../../js/AuxPreguntas'
import Mcq1 from '../../js/AuxPreguntas1'
import Mcq2 from '../../js/AuxPreguntas2'
import '../../css/Septmo/mod7-2.css';
import Scorm from '../../../scorm/Scorm';
import Encabezado from '../Encabezado'
import base from '../../basePreguntas.json'
import PopLightBox from '../PopLightBoxFinal'
import aud from '../../../assets/hombre.mp3'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.state={
            intento: 1,
            point: 0,
            cant: 0,
            assessment: [],
            base: base,
            list: [],
        }
        this.win = false
        this.song = new Audio(aud)
        this.ini = 670.5
        this.fin = 690
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

    componentDidMount(){
        this.props.audio(null, null, null)

        var num = ['primera','segunda','tercera','cuarta','quita','sexta','septima','octaba','novena','decima','once','doce','trece','catorce']; 
        // var num = [0,1,2,3,4,5,6,7,8,9,10,11,12,13]; 
        var list = []
        for (var i = 0; i<=20; i ++) {
            var random = Math.floor(Math.random()*num.length)
            var indice = num[random];
            // console.log(indice)
            // console.log(list)
            if (indice!=list[0]&&indice!=list[1]&&indice!=list[2]&&indice!=list[3]&&indice!=list[4]&&indice!=list[5]) {
                if (list.length>=6) {
                    break
                }else{
                    list.push(indice)
                }
            }
        }
        this.setState({list: list})
        // var number = num[indice];
        // num.splice(indice, 1);

    }

    acceptMethods = (openPopSugerencias) => {
        this.openPopSugerencias = openPopSugerencias;
    };

    updateAssesment(correct, response) {
        console.log(correct)
        this.setState({assessment: this.state.assessment.concat([correct])});
        Scorm.submitMCQ(correct, response);
        if (correct) {
            this.setState({point: this.state.point + 1 })
        }
        this.handleChangeQuestion()
    }

    handleGoBack(evt){
        this.props.goBack(evt)
        this.setState({intento: 2})
        this.setState({cant: 0})
        this.setState({assessment: []})
    }

    handleChangeQuestion(){
        const {cant} = this.state
        this.setState({cant: cant + 1})
    }

    render(){
        let {cant, list} =this.state
        const primera = list[0]
        let corr = []
        const {assessment} = this.state

        assessment.map(i=>{
            if (i) {
                corr.push(i)
            }
        })

        // console.log(assessment)

        if (this.state.intento==1) {
            if (assessment.length>=6) {
                if(corr.length>3){
                    this.openPopSugerencias('Question2Bien')
                    this.props.audio(true, null, 0)
                    this.setState({assessment: []})
                } else{
                    this.openPopSugerencias('Question2Cuidado')
                    this.setState({assessment: []})
                }
            }
        }

        if (this.state.intento==2) {
            if (assessment.length>=6) {
                if(corr.length>3){
                    this.openPopSugerencias('Question2Bien')
                    this.props.audio(true, null, 0)
                    this.setState({assessment: []})
                }else{
                    this.openPopSugerencias('Qstn2Cuidado')
                    this.setState({assessment: []})
                }
            }
        }


        if (this.state.cant==0 && this.state.intento==1 || this.state.cant==0 && this.state.intento==2) {
            this.contenido = <div className="contenedor">
                <Encabezado camb={1} encabe1="Es hora de evaluar lo que has aprendido" />
                <div className="row contentEvaFinal">
                    <p className="text cus">Ha llegado el momento de culminar este curso. </p>
                    <p className="text cus">Si respondes correctamente a las preguntas que encontrarás a continuación lograrás obtener un domo transparente y brillante para terminar de proteger la ciudad Kimberly-Clark.</p>
                    <p className="textNB cus" onClick={this.handleChangeQuestion.bind(this)} >¡Comienza ahora!</p>
                </div>
                <p className="minText">Haz clic en ¡Comienza ahora!</p>
            </div>
        }
        else if(this.state.cant==1 || this.state.cant==2) {
            this.contenido = <div className="contenedor">
                <div className="row contenido9">
                    <Mcq
                        result={this.updateAssesment.bind(this)}
                        question={base.base.primera.pregunta}
                        correctAnswer={base.base.primera.respu2}
                        answers={[base.base.primera.opc1,base.base.primera.opc2,base.base.primera.opc3]}
                    />
                    <Mcq
                        result={this.updateAssesment.bind(this)}
                        question={base.base.segunda.pregunta}
                        correctAnswer={base.base.segunda.respu2}
                        answers={[base.base.segunda.opc1,base.base.segunda.opc2,base.base.segunda.opc3]}
                    />
                    <p className="cant">{cant}/6</p>
                </div>
            </div>
        }
        else if(this.state.cant==3||this.state.cant==4) {
            this.contenido = <div className="contenedor">
                <div className="row contenido9">
                    <Mcq1
                        result={this.updateAssesment.bind(this)}
                        question={base.base.tercera.pregunta}
                        correctAnswer={base.base.tercera.respu2}
                        answers={[base.base.tercera.opc1,base.base.tercera.opc2,base.base.tercera.opc3]}
                    />
                    <Mcq1
                        result={this.updateAssesment.bind(this)}
                        question={base.base.cuarta.pregunta}
                        correctAnswer={base.base.cuarta.respu2}
                        answers={[base.base.cuarta.opc1,base.base.cuarta.opc2,base.base.cuarta.opc3]}
                    />
                    <p className="cant">{cant}/6</p>
                </div>
            </div>
        }else if(this.state.cant==5||this.state.cant==6) {
            this.contenido = <div className="contenedor">
                <div className="row contenido9">
                    <Mcq2
                        result={this.updateAssesment.bind(this)}
                        question={base.base.quita.pregunta}
                        correctAnswer={base.base.quita.respu2}
                        answers={[base.base.quita.opc1,base.base.quita.opc2,base.base.quita.opc3]}
                    />
                    <Mcq2
                        result={this.updateAssesment.bind(this)}
                        question={base.base.sexta.pregunta}
                        correctAnswer={base.base.sexta.respu2}
                        answers={[base.base.sexta.opc1,base.base.sexta.opc2,base.base.sexta.opc3]}
                    />
                    <p className="cant">{cant}/6</p>
                </div>
            </div>
        }

        return(
            <div>
                <PopLightBox shareMethods={this.acceptMethods} intento={this.state.intento} btnClose={true} goBack={this.handleGoBack.bind(this)} />
                {this.contenido}
            </div>
        )
    }
}
