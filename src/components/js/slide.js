import React, {Component} from 'react'
import ItemsCarousel from 'react-items-carousel';

export default class Slide extends Component {
    constructor(props){
        super(props)
        this.state = {
            children: [],
            activeItemIndex: 0,
            cant: this.props.cant.length-this.props.valid.length,
        }
        this.puntos = this.props.puntos
    }

    // componentDidMount(){

    // }

    handleClick(evt, price){
        this.props.funct(evt, price)
        this.puntos =  this.puntos - price
        this.setState({cant: this.state.cant-1})
    }

    componentWillUpdate(){
        this.props.funCant(this.state.cant)
    //     console.log(this.state.cant)
    //     if(this.state.cant<=0)
    //         PopupboxManager.close()
    }

    // changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });
    
    render(){
        const { activeItemIndex } = this.state;
        return (
            <div style={{"padding":"0 60px","maxWidth":'800px',"margin":"0 auto"}}>
                <ItemsCarousel
                    gutter={12}
                    activePosition={'center'}
                    chevronWidth={60}
                    numberOfCards={this.state.cant>1?2:1}
                    slidesToScroll={1}
                    outsideChevron={true}
                    showSlither={false}
                    firstAndLastGutter={false}
                    activeItemIndex={activeItemIndex}
                    requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                    rightChevron={this.props.right}
                    leftChevron={this.props.left}
                >
                {this.props.comp.map((j) =>
                    <div className="col item">
                        <div
                            key={j[1]}
                            className={j[0]}
                            onClick={()=>this.handleClick(j[1], j[2])}
                            style={{ height: 280, }}
                        />
                        <p className="text Puntaje" style={style.valor}>{j[2]} PK</p>
                    </div>
                )}
                </ItemsCarousel>
            </div>
        )
    }
}

const style = {
    valor: {
        position: 'fixed',
        margin: '0 auto',
        width: '35%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        top: '168px',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '20px',
    }
}