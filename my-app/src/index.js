import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Counter from './components/Counter'
// import SelectGenre from './components/SelectGenre'
// window.React = React;
//
// const root = document.getElementById("root");
// const initialValue = 10;
// // const element = React.createElement(Counter, { initialValue });
// const selectGenre = React.createElement(SelectGenre, {});
// ReactDOM.render(selectGenre, root);
// // ReactDOM.render(element, root);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
