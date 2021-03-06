import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/global.scss';
import './assets/styles/normalize.min.css';
import { App } from './components';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
