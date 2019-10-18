import React, {Component} from 'react';
import './css/App.css';
import Scorm from '../scorm/Scorm';
import PopLightBoxMenu from './js/PopLightBoxMenu'
import Learner from './DefaultQuest/Learner';
import Bienvenida from './js/bienvenida';
import Screen1 from './js/screen1';
import Screen2 from './js/screen2';
import Screen3 from './js/screen3';
import Screen4 from './js/screen4';
import Screen5 from './js/screen5';
import Screen6 from './js/screen6';
import Screen7 from './js/screen7';
import Mod1 from './js/Primero/mod1'
import Mod1o1 from './js/Primero/mod1-1'
import Mod1o2 from './js/Primero/mod1-2'
import Mod1o3 from './js/Primero/mod1-3'
import Mod2 from './js/Segundo/mod2'
import Mod2o1 from './js/Segundo/mod2-1'
import Mod2o2 from './js/Segundo/mod2-2'
import Mod2o3 from './js/Segundo/mod2-3'
import Mod2o4 from './js/Segundo/mod2-4'
import Mod2o5 from './js/Segundo/mod2-5'
import Mod2o6 from './js/Segundo/mod2-6'
import Mod2o7 from './js/Segundo/mod2-7'
import Mod2o8 from './js/Segundo/mod2-8'
import Mod2o9 from './js/Segundo/mod2-9'
import Mod2o10 from './js/Segundo/mod2-10'
import Mod3 from './js/Tercero/mod3'
import Mod3o1 from './js/Tercero/mod3-1'
import Mod3o2 from './js/Tercero/mod3-2'
import Mod3o2o1 from './js/Tercero/mod3-2-1'
import Mod3o3 from './js/Tercero/mod3-3'
import Mod3o4 from './js/Tercero/mod3-4'
import Mod3o5 from './js/Tercero/mod3-5'
import Mod4 from './js/Cuarto/mod4'
import Mod4o1 from './js/Cuarto/mod4-1'
import Mod4o2 from './js/Cuarto/mod4-2'
import Mod4o3 from './js/Cuarto/mod4-3'
import Mod4o4 from './js/Cuarto/mod4-4'
import Mod4o5 from './js/Cuarto/mod4-5'
import Mod5 from './js/Quinto/mod5'
import Mod5o1 from './js/Quinto/mod5-1'
import Mod5o2 from './js/Quinto/mod5-2'
import Mod5o3 from './js/Quinto/mod5-3'
import Mod5o4 from './js/Quinto/mod5-4'
import Mod6 from './js/Sexto/mod6'
import Mod6o1 from './js/Sexto/mod6-1'
import Mod6o2 from './js/Sexto/mod6-2'
import Mod6o3 from './js/Sexto/mod6-3'
import Mod7 from './js/Septmo/mod7'
import Mod7o1 from './js/Septmo/mod7-1'
import Mod7o2 from './js/Septmo/mod7-2'
import Mod8 from './js/finished'
import Game from './js/Game';
import Footer from './js/footer';
import Tienda from './js/tienda'
import aud from '../assets/hombre.mp3'

class App extends Component {

    constructor(props) {
        super(props);
        Scorm.init();
        this.state = {
            ttl: 50,
            pag: 1,
            learnerName: 0,
            botones: false,
            tienda: false, 
            menu: false,
            valid: [],
            anterior: false,
            conti: false,
            mapa: [['mapa0', 'intro'],['mapa1', 'intro'],['mapa2', 'intro'],['mapa3', 'intro'],['mapa4', 'intro'],['mapa5', 'intro'],['mapa6', 'intro']]
        }
        this.win = true
        this.song = new Audio(aud)
        this.conti = false
        this.evtt = null
        this.inii = null
        this.finn = null
    }

    handleAudio(evt, ini, fin){
        this.evtt = evt
        this.inii = ini
        this.finn = fin
        if(this.evtt === true) {
            this.song.currentTime=this.inii
            this.song.play()
            setInterval(()=>{
                if (this.song.currentTime==this.song.duration) {
                    this.song.stop()
                }else if (this.song.currentTime>this.finn) {
                    this.song.pause()
                    if (this.finn!=null && this.inii!=55.5) {
                        this.setState({conti: true})
                    }
                }
            },100)
        }
    }

    finish() {
        Scorm.finish();
    }

    pasarPag(){
        const {pag} = this.state
        this.setState({ pag: pag+1 })
        // if (this.finn != null) {
            this.setState({conti: false})
        // }
        this.song.pause()
    }

    rtroPag(){
        const {pag} = this.state
        this.setState({ pag: pag-1 })
        this.song.pause()
    }

    bckPag(){
        const {botones} = this.state
        this.setState({ botones: !botones })
        this.setState({tienda: false})
    }

    handlePuntos(e){
        this.setState({learnerName:e})
    }

    popUpScreen(e){
        this.pasar = e
    }

    handleChangeBtn(e){
        this.setState({botones:e})
    }

    handleTienda(e){
        this.setState({ tienda: e })
        this.setState({ botones: e })
    }

    handleMenu(e){
        this.setState({ menu: e })
        if (e) {
            setTimeout(() => {            
                this.openPopSugerencias('Menu')
            }, 100);
        }
    }

    acceptMethods = (openPopSugerencias) => {
        this.openPopSugerencias = openPopSugerencias;
    };

    handleAnterior(e){
        this.setState({anterior: e})
    }

    handleCompra(evt){
        this.setState({valid:evt})
    }

    handleUpdtMapa(evt, mapa, pCompra){
        this.state.mapa[evt][1] = mapa
        this.setState({learnerName: this.state.learnerName - pCompra})
    }

    handleGoTo(evt){
        this.setState({pag: evt})
    }

    handleGoBack(evt){
        this.setState({pag:evt})
    }

    // handleConti(evt){
    //     console.log(evt)
    // }

    render() {
        const pag = this.state.pag
        const pag1 = <Bienvenida audio={this.handleAudio.bind(this)} />
        const pag2 = <Screen1 audio={this.handleAudio.bind(this)} />
        const pag3 = <Screen2 audio={this.handleAudio.bind(this)} botones={this.handleChangeBtn.bind(this)} back={this.state.botones}/>
        const pag4 = <Screen3 audio={this.handleAudio.bind(this)}/>
        const pag5 = <Screen4 audio={this.handleAudio.bind(this)} />
        const pag6 = <Screen5 audio={this.handleAudio.bind(this)} />
        const pag7 = <Screen6/>
        const pag8 = <Screen7 audio={this.handleAudio.bind(this)} />
        const pag9 = <Mod1 audio={this.handleAudio.bind(this)} />
        const pag10 = <Mod1o1 video={this.handleAudio.bind(this)} puntos={this.state.learnerName} callback={this.handlePuntos.bind(this)}/>
        const pag11 = <Mod1o2 audio={this.handleAudio.bind(this)} puntos={this.state.learnerName} callback={this.handlePuntos.bind(this)}/>
        const pag12 = <Mod1o3 audio={this.handleAudio.bind(this)} />
        const pag13 = <Game audio={this.handleAudio.bind(this)} dptva={this.handleAnterior.bind(this)} />
        const pag14 = <Mod2 audio={this.handleAudio.bind(this)} />
        const pag15 = <Mod2o1 audio={this.handleAudio.bind(this)} puntos={this.state.learnerName} callback={this.handlePuntos.bind(this)}/>
        const pag16 = <Mod2o2 audio={this.handleAudio.bind(this)} />
        const pag17 = <Mod2o3 audio={this.handleAudio.bind(this)} />
        const pag18 = <Mod2o4 audio={this.handleAudio.bind(this)} />
        const pag19 = <Mod2o5 audio={this.handleAudio.bind(this)} />
        const pag20 = <Mod2o6 audio={this.handleAudio.bind(this)} puntos={this.state.learnerName} callback={this.handlePuntos.bind(this)}/>
        const pag21 = <Mod2o7 audio={this.handleAudio.bind(this)} botones={this.handleChangeBtn.bind(this)} back={this.state.botones} puntos={this.state.learnerName} callback={this.handlePuntos.bind(this)} />
        const pag22 = <Mod2o8 audio={this.handleAudio.bind(this)} puntos={this.state.learnerName} callback={this.handlePuntos.bind(this)} />
        const pag23 = <Mod2o9 audio={this.handleAudio.bind(this)} />
        const pag24 = <Mod2o10 audio={this.handleAudio.bind(this)} goBack={this.handleGoBack.bind(this)} />
        const pag25 = <Mod3 audio={this.handleAudio.bind(this)} />
        const pag26 = <Mod3o1 audio={this.handleAudio.bind(this)} puntos={this.state.learnerName} callback={this.handlePuntos.bind(this)} />
        const pag27 = <Mod3o2 audio={this.handleAudio.bind(this)} />
        const pag28 = <Mod3o2o1 audio={this.handleAudio.bind(this)} />
        const pag29 = <Mod3o3 audio={this.handleAudio.bind(this)} puntos={this.state.learnerName} callback={this.handlePuntos.bind(this)} />
        const pag30 = <Mod3o4 audio={this.handleAudio.bind(this)} puntos={this.state.learnerName} callback={this.handlePuntos.bind(this)} />
        const pag31 = <Mod3o5 audio={this.handleAudio.bind(this)} />
        const pag32 = <Mod4 audio={this.handleAudio.bind(this)} />
        const pag33 = <Mod4o1 audio={this.handleAudio.bind(this)} />
        const pag34 = <Mod4o2 audio={this.handleAudio.bind(this)} puntos={this.state.learnerName} callback={this.handlePuntos.bind(this)} />
        const pag35 = <Mod4o3 audio={this.handleAudio.bind(this)} puntos={this.state.learnerName} callback={this.handlePuntos.bind(this)} />
        const pag36 = <Mod4o4 audio={this.handleAudio.bind(this)} />
        const pag37 = <Mod4o5 audio={this.handleAudio.bind(this)} />
        const pag38 = <Mod5 audio={this.handleAudio.bind(this)} />
        const pag39 = <Mod5o1 audio={this.handleAudio.bind(this)} />
        const pag40 = <Mod5o2 audio={this.handleAudio.bind(this)} />
        const pag41 = <Mod5o3 audio={this.handleAudio.bind(this)} />
        const pag42 = <Mod5o4 audio={this.handleAudio.bind(this)} puntos={this.state.learnerName} callback={this.handlePuntos.bind(this)}  />
        const pag43 = <Mod6 audio={this.handleAudio.bind(this)} />
        const pag44 = <Mod6o1 video={this.handleAudio.bind(this)} puntos={this.state.learnerName} callback={this.handlePuntos.bind(this)} />
        const pag45 = <Mod6o2 audio={this.handleAudio.bind(this)} />
        const pag46 = <Mod6o3 audio={this.handleAudio.bind(this)} />
        const pag47 = <Mod7 audio={this.handleAudio.bind(this)} />
        const pag48 = <Mod7o1 audio={this.handleAudio.bind(this)} />
        const pag49 = <Mod7o2 audio={this.handleAudio.bind(this)} goBack={this.handleGoBack.bind(this)} />
        const pag50 = <Mod8 finish={this.finish.bind(this)} audio={this.handleAudio.bind(this)} />

        const foote = <Footer 
            pag={this.state.pag} 
            tienda={this.handleTienda.bind(this)}
            menu={this.handleMenu.bind(this)}
            ttl={this.state.ttl} 
        />

        if (this.state.tienda) {
            this.pasar = <Tienda puntos={this.state.learnerName} /* conti={this.handleConti.bind(this)} */ mapa={this.state.mapa} lugar={this.state.pag} updtMapa={this.handleUpdtMapa.bind(this)} valid={this.state.valid} compra={this.handleCompra.bind(this)} />
        }else {
            switch (pag) {
                case 1:
                    this.pasar = pag1
                    break;
                case 2:
                    this.pasar = pag2
                    break;
                case 3:
                    this.pasar = pag3
                    break;
                case 4:
                    this.pasar = pag4
                    break;
                case 5:
                    this.pasar = pag5
                    break;
                case 6:
                    this.pasar = pag6
                    break;
                case 7:
                    this.pasar = pag7
                    break;
                case 8:
                    this.pasar = pag8
                    break;
                case 9:
                    this.pasar = pag9
                    break;
                case 10:
                    this.pasar = pag10
                    break;
                case 11:
                    this.pasar = pag11
                    break;
                case 12:
                    this.pasar = pag12
                    break;
                case 13:
                    if (this.state.valid.length>=7 && this.state.tienda==false) 
                        this.setState({pag: this.state.pag + 1})
                    else
                        this.pasar = pag13
                    break;
                case 14:
                    if (this.state.valid.length>=7) {
                        this.pasar = pag14
                    }else {
                        this.setState({ tienda: true })
                        this.setState({ botones: true })
                        this.setState({ pag: 13 })
                    }
                    break;
                case 15:
                    this.pasar = pag15
                    if (this.state.valid.length==7) {
                        this.setState({valid: []})
                    }
                    break;
                case 16:
                    this.pasar = pag16
                    break;
                case 17:
                    this.pasar = pag17
                    break;
                case 18:
                    this.pasar = pag18
                    break;
                case 19:
                    this.pasar = pag19
                    break;
                case 20:
                    this.pasar = pag20
                    break;
                case 21:
                    this.pasar = pag21
                    break;
                case 22:
                    this.pasar = pag22
                    this.sig
                    break;
                case 23:
                    this.pasar = pag23
                    break;
                case 24:
                    if (this.state.valid.length>=7 && this.state.tienda==false) {
                        this.setState({pag: this.state.pag + 1})
                    }else 
                        // this.setState({conti: true})
                        this.pasar = pag24
                    break;
                case 25:
                    if (this.state.valid.length>=7) {
                        this.pasar = pag25
                    }else {
                        this.setState({ tienda: true })
                        this.setState({ botones: true })
                        this.setState({ pag: 24 })
                    }
                    break;
                case 26:
                    this.pasar = pag26
                    if (this.state.valid.length==7) {
                        this.setState({valid: []})
                    }
                    break;
                case 27:
                    this.pasar = pag27
                    break;
                case 28:
                    this.pasar = pag28
                    break;
                case 29:
                    this.pasar = pag29
                    break;
                case 30:
                    this.pasar = pag30
                break;
                case 31:
                    if (this.state.valid.length>=5 && this.state.tienda==false)
                        this.setState({pag: this.state.pag + 1})
                    else
                        this.pasar = pag31
                    break;
                case 32:
                    if (this.state.valid.length>=5 ) {
                        this.pasar = pag32
                    }else {
                        this.setState({ tienda: true })
                        this.setState({ botones: true })
                        this.setState({ pag: 31 })
                    }
                    break;
                case 33:
                    this.pasar = pag33
                    if (this.state.valid.length>=5) {
                        this.setState({valid: []})
                    }
                    break;
                case 34:
                    this.pasar = pag34
                    break;
                case 35:
                    this.pasar = pag35
                    break;
                case 36:
                    this.pasar = pag36
                    break;
                case 37:
                    if (this.state.valid.length>=7 && this.state.tienda==false)
                        this.setState({pag: this.state.pag + 1})
                    else
                        this.pasar = pag37
                    break;
                case 38:
                    if (this.state.valid.length>=7 ) {
                        this.pasar = pag38
                        this.state.mapa[4][1] = 'intro1111'
                        this.state.mapa[6][1] = 'intro1111'
                    }else {
                        this.setState({ tienda: true })
                        this.setState({ botones: true })
                        this.setState({ pag: 37 })
                    }
                    break;
                case 39:
                    this.pasar = pag39
                    if (this.state.valid.length==7) {
                        this.setState({valid: []})
                    }
                    break;
                case 40:
                    this.pasar = pag40
                    break;
                case 41:
                    this.pasar = pag41
                    break;
                case 42:
                    if (this.state.valid.length>=7 && this.state.tienda==false)
                        this.setState({pag: this.state.pag + 1})
                    else
                        this.pasar = pag42
                    break;
                case 43:
                    if (this.state.valid.length>=7 ) {
                        this.pasar = pag43   
                    }else {
                        this.setState({ tienda: true })
                        this.setState({ botones: true })
                        this.setState({ pag: 42 })
                    }
                    break;
                case 44:
                    this.pasar = pag44
                    if (this.state.valid.length==7) {
                        this.setState({valid: []})
                    }
                    break;
                case 45:
                    this.pasar = pag45
                    break;
                case 46:
                    this.pasar = pag46
                    break;
                case 47:
                    this.pasar = pag47
                    break;
                case 48:
                    this.pasar = pag48
                    break;
                case 49:
                    this.pasar = pag49
                    break;
                case 50:
                    this.pasar = pag50
                    break;
                default:
                    break;
            }
        }

        this.sig = <div className="btnT oRight" style={{visibility: 'show'}} onClick={this.pasarPag.bind(this)} />

        if (pag>1) {
            this.atras = <div className="btnT oLeft" onClick={this.rtroPag.bind(this)} />
        }else this.atras = null

        if (this.state.botones) {
            this.sig = null
            this.atras = null
            this.back = <div className="btnT oBack" onClick={this.bckPag.bind(this)} />
        }else {
            this.back = null
        }

        if (this.state.menu) {
            this.popMenu = <PopLightBoxMenu shareMethodsMenu={this.acceptMethods} menu={this.handleMenu.bind(this)} pagina={this.state.pag} goTo={this.handleGoTo.bind(this)} />
        } else{
            this.popMenu = ''
        }

        if (pag===this.state.ttl || this.state.conti==false)
            this.sig = null

        return (
            <div className="Main" >
                <header className="Main-header">
                    <Learner name={this.state.learnerName}/>
                </header>
                {this.popMenu}
                {this.pasar}
                <audio ref="audio" className="audio">
                    <source src={aud} />
                </audio>
                <footer id="footer">
                    <div className="row" style={{marginRight: 0, height: '100%' }}>
                        <div className="col-2">{foote}</div>
                        <div className="col botones">
                            {/* {this.atras} */}
                            {this.sig}
                            {this.back}
                        </div>
                        <div className="col-2" />
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
