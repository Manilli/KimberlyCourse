import React, { Component } from 'react';
import '../css/screen2-1.css';
import PopLightBox from './PopLightBox'

export default class Screen2 extends Component {
    constructor(props){
        super(props)
    }

    acceptMethods = (openPopSugerencias) => {
        this.openPopSugerencias = openPopSugerencias;
    };

    componentWillMount() {
        this.props.val()
    }

    render(){
        return(
            <div >
                <PopLightBox shareMethods={this.acceptMethods}/>
                <div className="contenedor2-1">
                    <div className="recomNavega">
                        <div className="menus">
                            <div className="row customRow Prin">
                                <div className="col">
                                    <p className="text iSalir" onClick={() => this.openPopSugerencias('Salir')}  ><span className="icnsMn">Ícono Salir</span></p>
                                </div>
                            </div>

                            <div className="row customRow">
                                <div className="col">
                                    <div className="row customRow Prin">
                                        <p className="text iMenu" onClick={() => this.openPopSugerencias('Menu')}  ><span className="icnsMn">Ícono Menú</span></p>
                                    </div>
                                    <div className="row customRow">
                                        <p className="text iTienda" onClick={() => this.openPopSugerencias('Tienda')}  ><span className="icnsMn">Ícono Tienda</span></p>
                                    </div>
                                </div>

                                <div className="col">
                                    <div className="row customRow Prin">
                                        <p className="text iSubr" onClick={() => this.openPopSugerencias('Subr')}  ><span className="icnsMn">Palabra<br/>Subrayada</span></p>
                                        {/* <p className="text iSubr" onClick={() => this.openPopSugerencias('Subr')}  onClick={()=>{this.changeView()}} ><span className="icnsMn">Subrayada</span></p> */}
                                    </div>
                                    <div className="row customRow">
                                        <p className="text iPdf" onClick={() => this.openPopSugerencias('Pdf')}  ><span className="icnsMn">Ícono de PDF</span></p>
                                    </div>
                                </div>
                            </div>

                            <div className="row customRow Prin">
                                <div className="col">
                                    <p className="text iAtras" onClick={() => this.openPopSugerencias('Atras')} ><span className="icnsMn">Ícono Atras</span></p>
                                </div>
                                <div className="col">
                                    <p className="text iAdelante" onClick={() => this.openPopSugerencias('Adelante')} ><span className="icnsMn">Ícono Adelante</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}