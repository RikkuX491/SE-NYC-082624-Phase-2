import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import MainContainer, {exampleItems, person} from './components/MainContainer'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// console.log(root)

console.log(exampleItems)
console.log(person)

root.render(
  // <>
  //   <MainContainer/>
  //   <MainContainer/>
  // </>
  <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
