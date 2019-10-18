import React from 'react';
import './Mcq.css'

class Mcq extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            answered: false,
            answerT: 'answerDefault',
        }
    }

    handleOptionChange = (changeEvent) => {
        if(changeEvent.target.value=='Verdadero' || changeEvent.target.value=='Si'){
            this.setState({ selectedOption: 0 });
        }else
            this.setState({ selectedOption: 1 });
        this.handleFormSubmit.bind(this)
    }

    renderAnswers() {
        let context = this;
        return (
            this.props.answers.map(function(answer, index) {
                return  (
                    <div className="answer styleAnswer" key={index}>
                        <button className="styleLableAnswer" onClick={context.handleOptionChange} value={answer} type="submit" >
                            {answer}
                        </button>
                    </div>
                )
            })
        )
    }

    handleFormSubmit() {
        this.setState({answered: true});
        this.props.result(this.state.selectedOption === this.props.correctAnswer, this.props.answers[this.state.selectedOption]);
    }

    componentDidMount() {
        this.interval = setInterval(() => this.checkCorrectAnswer(), 100);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    currentState() {
        if(!this.state.answered) {
            return( 
                <form className="form styleForm" onSubmit={this.handleFormSubmit.bind(this)}>
                    {this.renderAnswers()}<br/>
                    {/* <button className="btn btn-warning" type="submit">Submit</button> */}
                </form>
            )
        } /*else {
            return <div>{this.checkCorrectAnswer()}</div>
        }*/
    }

    checkCorrectAnswer() {
        if (this.state.selectedOption!=null) {
            if(this.state.selectedOption === this.props.correctAnswer) {
                // this.respuesta = <div className="answerTrue"></div>
                this.setState({answerT: 'answerTrue'})
                // this.answerT = 'answerTrue'
            }else {
                this.setState({answerT: 'answerFalse'})
                // this.answerT = 'answerFalse'
            }
        }
    }

    render() {

        // this.answerT = 'answerDefault'

        // if(this.state.selectedOption === this.props.correctAnswer) {
        //     // this.respuesta = <div className="answerTrue"></div>
        //     // this.setState({answerT: 'answerTrue'})
        //     this.answerT = 'answerTrue'
        // }else {
        //     // this.setState({answerT: 'answerFalse'})
        //     this.answerT = 'answerFalse'
        // }

        return (
            <div className="Mcq styleMcq">
            <div className={this.state.answerT}></div>
            <p className="styleTextP">{this.props.question}</p>
            {this.currentState()}
        </div>);
    };
};

export default Mcq;
