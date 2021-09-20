import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import App2 from "./components/App2";

ReactDOM.render(
    <div>
      <App nome="Marcelo" sobrenome="Teixeira" idade="59"/>
      <App2/>
    </div>,
  document.getElementById('root')
)