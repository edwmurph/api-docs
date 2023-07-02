import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'swagger-ui-dist/swagger-ui.css';
import './global.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app.jsx';

ReactDOM.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
