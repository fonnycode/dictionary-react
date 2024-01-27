import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

    <footer>
      This project was coded by
      <a href="https://www.linkedin.com/in/fonny-chandra-41b81970/">
        {" "}
        Fonny Chandra
      </a>
      , is open-source on{" "}
      <a href="https://github.com/fonnycode/dictionary-react"> Github</a> hosted
      on
      <a href="https://react-dictionary-apps.netlify.app/"> Netlify</a>
    </footer>
  </React.StrictMode>
);

reportWebVitals();
