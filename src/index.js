import store from "./redux/redux-store";
// import store from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let _callSubscriber = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}


reportWebVitals();

_callSubscriber(store.getState());
store.subscribe(() =>{
    let state = store.getState();
    _callSubscriber(state);
});
