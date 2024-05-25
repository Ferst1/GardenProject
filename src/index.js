import React from 'react';
import ReactDOM from 'react-dom/client';
import s from './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className={s.container}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>
);


