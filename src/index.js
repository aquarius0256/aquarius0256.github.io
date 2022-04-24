import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DialogItem from "./Components/Dialogues/DialogItem/DialogItem";

// let dialoguesData = [
//         {id: 1, name: 'Artur'},
//         {id: 2, name: 'Tanyuha'},
//         {id: 3, name: 'Kamila'}
//     ]
//
// let messagesData = [
//     {id: 1, message: 'Hi'},
//     {id: 2, message: 'How are you', likesCount: 13},
//     {id: 3, message: 'How is your it-kamasutra bro?', likesCount: 14}
// ]
//
// let postData = [
//     {id: 1, message: 'How are you?', likesCount: 12},
//     {id: 1, message: 'It\'s my first post', likesCount: 13},
//     {id: 1, message: 'How are you?', likesCount: 12}
// ]

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
