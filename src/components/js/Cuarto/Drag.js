import React, { Component } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'

export default class Mod1 extends Component {
    constructor(props){
        super(props)
        this.puntos = this.props.puntos
    }

    acceptMethods = (openPopSugerencias) => {
        this.openPopSugerencias = openPopSugerencias
    }

    handleAllowDrop(ev) {
        console.log(ev)
    }
    
    handleDrag(ev) {
        ev.dataTransfer.setData("Text", ev.target.id)
    }
    
    handleDrop(ev) {
        var data = ev//.dataTransfer//.getData()//"Text")
        console.log(data)
        // ev.target.appendChild(document.getElementById(data))
        // ev
    }

    render(){
        return(
            <div className="contenedor">
                <Container onDrop={()=>{this.handleDrop(this); this.props.onDrop}} onDragEnter={this.handleAllowDrop(this)} >
                    {this.props.items.map((item, key)=> {
                        return (                        
                            <Draggable key={key} onDragStart={()=>this.handleDragStart(this)} >
                                <div className={"row cont"+this.props.lado}>
                                    <p className="text" >{item}</p>
                                </div>
                            </Draggable>
                        )
                    })}
                </Container>
            </div>
        )
    }
}
