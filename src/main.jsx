import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';
import './index.css';

// Entry point that renders app into DOM.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);