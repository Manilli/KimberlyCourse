import React, {Component} from 'react'
import '../css/preguntasFinales.css'

export default class PreguntasFinales extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedOption: ''
        }
    this.respuesta = this.props.rspta1
    this.radioChange = this.radioChange.bind(this);
    }

    radioChange(e) {
        const escog = e.currentTarget.value
        this.setState({
            selectedOption: escog
        });
        if (escog) {
            this.props.rspta(escog)
        }
    }

    render(){
        return(
            <div className="contenedorPregu">
                <p className="pregunta"><span className="indicador"></span>{this.props.pgta1}</p>
                <div className="row opciones">
                    <div className="row opc">
                        <input type="radio"
                            className="col-1 check"
                            value={this.props.rpst11}
                            checked={this.state.selectedOption === this.props.rpst11}
                            onChange={this.radioChange} />
                        <div className="col">{this.props.rpst11}</div>
                    </div>
                    <div className="row opc">
                        <input type="radio"
                            className="col-1 check"
                            value={this.props.rpst12}
                            checked={this.state.selectedOption === this.props.rpst12}
                            onChange={this.radioChange}
                        />
                        <div className="col">{this.props.rpst12}</div>
                    </div>
                    <div className="row opc">
                        <input type="radio"
                            className="col-1 check"
                            value={this.props.rpst13}
                            checked={this.state.selectedOption === this.props.rpst13}
                            onChange={this.radioChange}
                        />
                        <div className="col">{this.props.rpst13}</div>
                    </div>
                </div>
            </div>
        )
    }
}