// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import s from './index.css';
// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <div className={s.container}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </div>
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from '../src/redux/store'; 
import App from './App';
import s from './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className={s.container}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </div>
);
