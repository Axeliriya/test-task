import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components';
import './assets/styles/main.scss';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App error={null} users={[]} isLoading={false} />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root'),
);
