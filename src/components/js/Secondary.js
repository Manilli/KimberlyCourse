import React, {Component} from 'react';
// import logo from '../../logo.svg';
import '../css/App.css';
import Scorm from '../../scorm/Scorm';
// import Learner from '../DefaultQuest/Learner';
import Mcq from '../DefaultQuest/Mcq';
import coin from "../../assets/coin.png"
class Secundary extends Component {

    constructor(props) {
        super(props);
        Scorm.init();
        this.state = {
            learnerName: Scorm.getLearnerName(),
            assessment: []
        }
        this.puntos = this.props.puntos
    }

    updateAssesment(correct, response) {
        this.setState({assessment: this.state.assessment.concat([correct])});
        Scorm.submitMCQ(correct, response);
    }

    handlePuntos(){
        this.props.callback(this.puntos + 200);
    }

    render() {
        return (
            <div className="Secundary">
                <div className="main">
                    <Mcq result={this.updateAssesment.bind(this)} question="What is 10*10?" correctAnswer={0} answers={["100","20"]}/>
                    <Mcq result={this.updateAssesment.bind(this)} question="What is the capital of Spain?" correctAnswer={2} answers={["Barcelona","Lisbon", "Madrid"]}/>
                    <Mcq result={this.updateAssesment.bind(this)} question="Which US President's office commissioned the creation of SCORM?" correctAnswer={3} answers={["Donald Trump","Barack Obama", "Ronald Reagan", "Bill Clinton"]}/>
                    <img src={coin} alt="" style={style} onClick={this.handlePuntos.bind(this)} />
                </div>
            </div>
        );
    }
}

const style = {
    width: 50,
    height: 50,
    cursor: 'pointer',
}

export default Secundary;
