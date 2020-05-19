import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import * as serviceWorker from './serviceWorker';

const initialBooks = [
  {id: Math.random(),  title: "Rich Dad, Poor Dad", category: "Learning"},
  {id: Math.random(), title: "Things Fall Apart", category: "Horror"},
  {id: Math.random(), title: "Cinderilla and the seven Dwarfs", category: "Kids"}
]

// class Bookstore extends React.Component(){
//   constructor(props){
//     super(props);
//     this.state = initialBooks
//   }
  
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
