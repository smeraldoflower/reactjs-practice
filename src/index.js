import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './PP01/App';
import Counter from './PP01/Counter';
import BMI from './PP01/BMI';
import ToDo from './PP02/ToDo';
import Wallet from './PP02/Wallet';

ReactDOM.render(
  <React.StrictMode>
    {/* <h1>PP #1 =======</h1>

    <App />
    <Counter />
    <BMI /> */}

    <h1>PP #2 =======</h1>
    
    <ToDo/>
    <Wallet/>

  </React.StrictMode>,
  document.getElementById('root')
);