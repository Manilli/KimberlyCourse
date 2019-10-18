import React, { Component } from 'react'
import '../css/flechas.css';
import $ from 'jquery';
import ArrowKeysReact from 'arrow-keys-react';
import dedo from '../../assets/Elements/dedo.png'
// import numdoce from '../../assets/Elements/numDoce.png'

export default class Flechas extends Component{
    constructor(props){
        super(props)
        this.state = {
            lugar: 2,
            seconds: 0,
        }
        
        ArrowKeysReact.config({
            left: () => {
                this.handelLeft(this)
            },
            right: () => {
                this.handelRight(this)
            }
        });
    }

    handelLeft(){
        const {lugar} = this.state
        if (lugar<2) {
            $('.f1').html($('.dedo'))
        }else {
            $('.f'+lugar).html($('.dedo'))
            this.setState(state => ({ 
                lugar: state.lugar-1
            }))
        }

        switch (lugar) {
            case 2:
                this.contexto = <p className='text contectoLugarInfo' >Cargarás tu tarjeta de acceso y carné EHS en el ingreso y desplazamiento dentro de las instalaciones. Estos elementos se revisarán al ingreso.</p>
                break;
            case 3:
                this.contexto = <p className='text contectoLugarInfo' >Permitirás la revisión de tu bolso al ingresar y salir de la planta.</p>
                break;
            case 4:
                this.contexto = <p className='text contectoLugarInfo' >Ingresarás los elementos necesarios para laborar y evitarás llevar otros equipos, celulares, dinero o joyas.</p>
                break;
            case 5:
                this.contexto = <p className='text contectoLugarInfo' >Tendrás presente que los parqueaderos de la compañía son limitados, que el ingreso de vehículos está controlado y para este se aplica la medida de pico y placa ambiental que rige en el Área Metropolitana.</p>
                break;
            case 6:
                this.contexto = <p className='text contectoLugarInfo' >Evitarás el ingreso de armas blancas y de fuego a la planta. Solo ingresarás las herramientas corto punzantes con elementos de protección que han sido aprobados por el Área de Seguridad, Salud y Medio Ambiente de Kimberly-Clark.</p>
                break;
            case 7:
                this.contexto = <p className='text contectoLugarInfo' >Registrarás en portería las herramientas o equipos de computo que no sean de Kimberly-Clark.</p>
                break;
            case 8:
                this.contexto = <p className='text contectoLugarInfo' >Evitarás el ingreso de celulares, cámaras fotográficas o de video al interior de la planta.</p>
                break;
            case 9:
                this.contexto = <p className='text contectoLugarInfo' >Tendrás presente que el uso personal de teléfonos móviles solo se autoriza en las áreas designadas para empleados, visitantes y contratistas.</p>
                break;
            case 10:
                this.contexto = <p className='text contectoLugarInfo' >Cuidarás el candado se seguridad que cierra el casillero que se te ha asignado. Tendrás presente que el casillero contará con el respectivo candado de seguridad, ¡es tu responsabilidad!</p>
                break;
            case 11:
                this.contexto = <p className='text contectoLugarInfo' >Contarás con la factura o el “Formato Salida Artículos de Planta”, correctamente diligenciado, para retirar los productos de la planta.</p>
                break;
            case 12:
                this.contexto = <p className='text contectoLugarInfo' >Tendrás en cuenta que Kimberly-Clark realiza inspecciones a la zona de casilleros y campamentos de la planta de manera aleatoria.</p>
                break;
            case 13:
                this.contexto = <p className='text contectoLugarInfo' >Recordarás que cualquier situación que afecte la seguridad de las personas, procesos o infraestructura deberá reportarse al personal de Seguridad de Kimberly-Clark.</p>
                this.props.audio(true)
                break;
            default:
                break;
        }
    }

    handelRight(){
        const {lugar} = this.state
        if (lugar>12) {
            $('.f12').html($('.dedo'))
        }else {
            $('.f'+lugar).html($('.dedo'))
            this.setState(state => ({ 
                lugar: state.lugar+1
            }))
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {this.handelLeft(); this.handelRight()}, 0.01);
        // this.interval = setInterval(() => this.tick(), 1000);
      }
    
      componentWillUnmount() {
        clearInterval(this.interval);
      }

    render(){
        $('.arrowKey').focus()
        return(
            // <div>
                <div className="contenidoDedo">
                    <div {...ArrowKeysReact.events}  className="arrowKey" tabIndex="1">
                        <div className="row empareja">
                            <div className="row mainCol">
                                <div className="col cont f1"><img src={dedo} className="dedo" /></div>
                                <div className="col cont f2"></div>
                                <div className="col cont f3"></div>
                                <div className="col cont f4"></div>
                                <div className="col cont f5"></div>
                                <div className="col cont f6"></div>
                                <div className="col cont f7"></div>
                                <div className="col cont f8"></div>
                                <div className="col cont f9"></div>
                                <div className="col cont f10"></div>
                                <div className="col cont f11"></div>
                                <div className="col cont f12"></div>
                            </div>
                            <div className="row mainCol">
                                <div className="col comp" ><p className="numAz">1</p></div>
                                <div className="col comp" ><p className="numAz">2</p></div>
                                <div className="col comp" ><p className="numAz">3</p></div>
                                <div className="col comp" ><p className="numAz">4</p></div>
                                <div className="col comp" ><p className="numAz">5</p></div>
                                <div className="col comp" ><p className="numAz">6</p></div>
                                <div className="col comp" ><p className="numAz">7</p></div>
                                <div className="col comp" ><p className="numAz">8</p></div>
                                <div className="col comp" ><p className="numAz">9</p></div>
                                <div className="col comp" style={{"padding": "0 11px"}} ><p className="numAz">10</p></div>
                                <div className="col comp" ><p className="numAz">11</p></div>
                                <div className="col numDoce"><p className="numAz" style={{"right": "3px"}} >12</p></div>
                            </div>
                        </div>
                        <div className="row contexto">
                            <div className="styleSegu"></div>
                            <div className="infoContexto">{this.contexto}</div>
                        </div>
                    </div>
                </div>
            //     {/* <div style={style.contenido}>
            //         Seconds: {this.state.seconds}
            //     </div>
            // </div> */}
        )
    }
}

const style = {
    contenido: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        margin: '10vmin',
    }
}