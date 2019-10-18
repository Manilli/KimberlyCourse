import React, {Component} from 'react';
import '../css/Footer.css';
import 'lightbox-react/style.css';

class footer extends Component {
    constructor(props){
        super(props)
    }

    handleTienda(){
        this.props.tienda(true)
    }

    handleMenu(){
        this.props.menu(true)
    }

    render() {
        return (
            <div className="Menu">
                <div className="general">
                    <div className="tienda" onClick={this.handleTienda.bind(this)}></div>
                    <div className="menu" onClick={this.handleMenu.bind(this)}></div>
                    <h5 className="contador">{this.props.pag}/{this.props.ttl}</h5>
                </div>
            </div>
        );
    }
}

export default footer;
