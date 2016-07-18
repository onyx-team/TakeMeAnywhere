import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/App.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import routes from './routes.js';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>
  , document.getElementById('app'));


