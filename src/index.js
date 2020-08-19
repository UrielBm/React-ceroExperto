import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import './index.css'
import CounterApp from './CounterApp';

//const saludo =<h1>Que onda la banda</h1>
const divRoot = document.querySelector('#Mi_App');

ReactDOM.render(<CounterApp />,divRoot);