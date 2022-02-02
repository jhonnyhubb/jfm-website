import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Components/css/styles.css';
import App from './Components/pages/App/App';
import HeaderScroll from './Components/Js/header/headerScroll';

ReactDOM.render(
  <React.StrictMode>
    <HeaderScroll /> 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);