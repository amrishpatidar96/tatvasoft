import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from './ReduxStore';

import { Provider } from 'react-redux';

const store = configureStore() ;

// console.log("rendering....");
// store.dispatch({type:'name/added',name:'amrish'});
// store.dispatch({type:'name/added',name:'amrish1'});
// store.dispatch({type:'name/added',name:'amrish2'});
// store.dispatch({type:'name/added',name:'amrish3'});
// store.dispatch({type:'name/deleted',index:0});
// store.dispatch({type:'name/deleted',index:2});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
