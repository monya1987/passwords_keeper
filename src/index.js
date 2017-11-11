import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import mainReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(mainReducer, applyMiddleware(thunk, createLogger));

ReactDOM.render(<App store={store} />, document.getElementById('root'));
