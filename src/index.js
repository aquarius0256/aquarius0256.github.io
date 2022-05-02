


// import {rerenderEntireTree} from "./render";
import store from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import DialogItem from "./Components/Dialogues/DialogItem/DialogItem";
// import MyPosts from "./Components/Profile/MyPosts/MyPosts";

// import {addPost, updateNewPostText} from './redux/state';


// addPost('samurai');
let _callSubscriber = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

_callSubscriber(store.getState());
store.subscribe(_callSubscriber);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

