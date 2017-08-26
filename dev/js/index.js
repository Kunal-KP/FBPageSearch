import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import Home from './components/Home';
import Header from './components/Header';
//import {Router, browserHistory} from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom'
import routes from './components/routes';

const logger = createLogger();

const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);


ReactDOM.render(
    <Provider store = {store}>
         <BrowserRouter>
                  <Route path="/" component={Header}/>
             </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);