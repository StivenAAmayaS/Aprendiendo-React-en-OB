import React from 'react';
import ReactDOM from 'react-dom/client';

// Aqui añadimos Bootstrap a nuestro proyecto ---------
import 'bootstrap/dist/css/bootstrap.css';
// Importante: los estilos propios deben ir debajo del bootstrap para que no los pise.
// ----------------------------------------------------

// Aqui importamos Bootstrap-icons --------------------
import 'bootstrap-icons/font/bootstrap-icons.css'
// ----------------------------------------------------

import './index.css';
import App from './App';
// import AppRoutingOne from './AppRoutingOne';
// import AppRoutingFinal from './AppRoutingFinal';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
    {/* <AppRoutingFinal></AppRoutingFinal> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
