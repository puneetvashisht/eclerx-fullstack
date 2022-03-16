import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
    auth: false
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN': return {auth: true}

        case 'LOGOUT': return {auth: false}
    }
}
const composedEnhancer = composeWithDevTools()
// store
const store = createStore(reducer, composedEnhancer)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

, document.getElementById('root'));
