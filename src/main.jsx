import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter } from 'react-router-dom';
import AppRouter from './pages/router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>
);
