import React, {Component} from 'react';
import '../css/App.css';
import Scorm from '../../scorm/Scorm';
import Mcq from '../DefaultQuest/Mcq';

class Main extends Component {

    constructor(props) {
        super(props);
        Scorm.init();
        this.state = {
            learnerName: Scorm.getLearnerName(),
            assessment: [],
        }
    }

    updateAssesment(correct, response) {
        this.setState({assessment: this.state.assessment.concat([correct])});
        Scorm.submitMCQ(correct, response);
    }

    render() {
        return (
            <div className="Main">
                <div className="main">
                    <Mcq result={this.updateAssesment.bind(this)} question="What is the capital of Spain?" correctAnswer={2} answers={["Barcelona","Lisbon", "Madrid"]}/>
                    <Mcq result={this.updateAssesment.bind(this)} question="What is the capital of Spain?" correctAnswer={2} answers={["Barcelona","Lisbon", "Madrid"]}/>
                    <Mcq result={this.updateAssesment.bind(this)} question="Which US President's office commissioned the creation of SCORM?" correctAnswer={3} answers={["Donald Trump","Barack Obama", "Ronald Reagan", "Bill Clinton"]}/>
                </div>
            </div>
        );
    }
}

export default Main;
