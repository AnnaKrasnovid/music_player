import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './routes/App';

import 'normalize.css';
import './assets/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter basename='/music_player'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

