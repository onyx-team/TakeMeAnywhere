import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/App.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import routes from './routes.js';
import reducers from './reducers';
import PromiseHandler from './middlewares/promise_handler';

const createStoreWithMiddleware = applyMiddleware(PromiseHandler)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>
  , document.getElementById('app'));


