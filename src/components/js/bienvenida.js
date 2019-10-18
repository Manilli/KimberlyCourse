import React, {Component} from 'react';
import '../css/App.css';
import Scorm from '../../scorm/Scorm';
import bakgnd from '../../assets/Backgrounds/main.png';
// import Sound from 'react-sound'
// import soundfile from '../../../hombre.wav'

class Main extends Component {

    constructor(props) {
        super(props);
        Scorm.init();
        this.state = {
            learnerName: Scorm.getLearnerName(),
            assessment: [],
        }
    }

    componentDidMount(){
        this.props.audio(true, 0, 6.5)
    }

    // componentDidUpdate(){
    //     this.props.audio()
    // }

    updateAssesment(correct, response) {
        this.setState({assessment: this.state.assessment.concat([correct])});
        Scorm.submitMCQ(correct, response);
    }

    render() {
        return (
            <div >
                <div className="main" >
                    <img src={bakgnd} width="80%" height="510px" alt=""/>
                </div>
                {/* <Sound
                    url={soundfile}
                    playStatus={Sound.status.PLAYING}
                    onLoading={this.handleSongLoading}
                    onPlaying={this.handleSongPlaying}
                    onFinishedPlaying={this.handleSongFinishedPlaying}
                /> */}
            </div>
        );
    }
}

export default Main;
