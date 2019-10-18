import React from 'react';
import '../DefaultQuest/Mcq2.css'

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
      this.setState({
        selectedOption: Number(changeEvent)
      });
      this.handleFormSubmit(Number(changeEvent))
    }

    renderAnswers(func, selOp) {
        // let context = this;
        return (
            this.props.answers.map(function(answer, index) { //answer styleAnswer
                return  (
                    <div className="opc" key={index}>
                        <input type="radio" value={index}
                            className="lableAnswer1"
                            checked={selOp === index}
                            onChange={()=>{func(index)}} 
                        />
                        <div className="col" >{answer}</div>
                    </div>
                )
            })
        )
    }

    
    handleFormSubmit(evt) {
        this.setState({answered: true});
        this.props.result(evt === this.props.correctAnswer, this.props.answers[this.state.selectedOption]);
    }

    // componentDidMount() {
    //     this.interval = setInterval(() => this.checkCorrectAnswer(), 1000);
    // }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    currentState() {
        // if(!this.state.answered) { //form styleForm
            return( 
                <form className="opciones" >
                    {this.renderAnswers(this.handleOptionChange.bind(this), this.state.selectedOption)}
                </form>
            )
        // } 
    }

    // checkCorrectAnswer() {
    //     if(this.state.selectedOption === this.props.correctAnswer) {
    //         this.setState({answerT: 'answerTrue'})
    //     }else {
    //         this.setState({answerT: 'answerFalse'})
    //     }
    // }

    render() {
        return (
            <div className="Mcq styleMcq1">
                <p className="pregunta"><span className="indicador"></span>{this.props.question}</p>
                {this.currentState()}
            </div>
        );
    };
};

export default Mcq;
