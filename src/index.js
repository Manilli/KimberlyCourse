/// <reference path="./phaser.d.ts"/>
import './bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// import WordSoup from './components/Alphabet'

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<WordSoup />, document.getElementById('game'));
registerServiceWorker();
