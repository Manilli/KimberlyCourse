import React, {Component} from 'react';
import '../css/finished.css'
import Encabezado from './Encabezado'
import domo from '../../assets/Elements/domo.png'

export default class Finished extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount(){
        this.props.audio(true,690,750)
        this.props.finish(true)
    }

    render() {
        return (
            <div className="contenedor">
                <Encabezado encabe1="Has concluido este recorrido" />
                <div className="row contentFinish">
                    <div className="col"><img src={domo} className="domo"/></div>
                    <div className="col-4">
                        <div className="text"><p className="text">Lograste transformar el espacio que te entregamos y construiste una Ciudad segura.</p></div>
                        <div className="text"><p className="text">Esperamos que pongas en practica las nociones que aprendiste durante este recorrido, con ellas proteges tu vida, la de los demás y la del medio ambiente.</p></div>
                        <div className="text"><p className="text">Gracias por realizar este curso y por preocuparte por el crecimiento de Kimberly-Clark.</p></div>
                    </div>
                </div>
            </div>
        );
    }
}
