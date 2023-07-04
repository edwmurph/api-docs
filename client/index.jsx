import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'swagger-ui-react/swagger-ui.css';
import './global.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavBar from './components/nav-bar.jsx';
import Home from './components/home.jsx';
import SwaggerUI from './components/swagger-ui.jsx';
import Redoc from './components/redoc.jsx';
import AsyncAPI from './components/asyncapi.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/swagger',
    element: <SwaggerUI/>
  },
  {
    path: '/redoc',
    element: <Redoc/>
  },
  {
    path: '/async-api',
    element: <AsyncAPI/>
  }
]);

ReactDOM.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    <div>
      <NavBar/>
      <RouterProvider router={router}/>
    </div>
  </React.StrictMode>
);
