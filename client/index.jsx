import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'swagger-ui-react/swagger-ui.css';
import './global.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import Layout from './components/layout.jsx';
import Home from './components/home.jsx';
import SwaggerUI from './components/swagger-ui.jsx';
import Redoc from './components/redoc.jsx';
import AsyncAPI from './components/asyncapi.jsx';

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
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
    ]
  }
]);

ReactDOM.createRoot( document.getElementById('root') ).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <RouterProvider router={router}/>
    </PrimeReactProvider>
  </React.StrictMode>
);
