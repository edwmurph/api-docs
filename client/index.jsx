import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'swagger-ui-react/swagger-ui.css';
import '@asyncapi/react-component/styles/default.css';
import './global.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import Layout from './components/layout.jsx';
import Home from './components/home.jsx';
import Swagger from './components/swagger.jsx';
import AsyncAPI from './components/asyncapi.jsx';
import Markdown from './components/markdown.jsx';

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
        element: <Swagger/>
      },
      {
        path: '/async-api',
        element: <AsyncAPI/>
      },
      {
        path: '/markdown',
        element: <Markdown/>
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
