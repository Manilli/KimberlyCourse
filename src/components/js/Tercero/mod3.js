import React, { Component } from 'react';
import Encabezado from '../Encabezado'
import '../../css/Tercero/mod3.css'
import ciudad from '../../../assets/Elements/ciudad3.png'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.audio(true,363,402)
    }

    // componentWillMount(){
    //     this.props.audio(true,286,324)
    // }
    
    render(){
        return(
            <div className="contenedor">
                <Encabezado encabe1="Tercer elemento: los edificios de la ciudad Kimberly-Clark" />
                <div className="row parrafo">
                    <p className="text" style={{marginBottom: '0px'}}><span style={{fontWeight: 'bold'}}>¡Lo hiciste de nuevo!</span><br/> Has logrado avanzar en la transformación de esta ciudad, ahora podemos ver en ella los edificios y las construcciones.</p>
                    <p className="textN textoAz">¿Qué aprenderás en esta nueva etapa? </p>
                    <div className="row">
                        <div className="col segModText">
                            <p className="text">Durante la creación de estos edificios existieron Tareas de Alto Riesgo para los empleados y contratistas que los construyeron. </p>
                            <p className="text">Esos peligros y riesgos fueron contrarrestados con las conductas adecuadas, las cuales te mostraremos a continuación para que las pongas en práctica durante tus labores.  </p>
                        </div>
                        <div className="col-7">
                            <img className="ciud3" src={ciudad} alt="i" width="115%"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}