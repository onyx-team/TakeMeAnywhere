import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/App.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import routes from './routes.js';
import reducers from './reducers';
import PromiseHandler from './middlewares/promise_handler';

//Register any and all middleware to go through here
const createStoreWithMiddleware = applyMiddleware(PromiseHandler)(createStore);


//Wrap the Router in Provider (which then loads up components based on set route in the routes.js file)
  //Provider will listen for changes to state before alerting the app's Containers (components that have access to state);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>
  , document.getElementById('app'));