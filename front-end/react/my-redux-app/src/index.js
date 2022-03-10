import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {combineReducers, createStore} from 'redux'
import employeeReducer from './store/employee-reducer';
import productsReducer from './store/product-reducer';
import { Provider } from 'react-redux';

  // store with reducer
// Create a Store - state container
const store = createStore(combineReducers({employeeReducer, productsReducer}))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
