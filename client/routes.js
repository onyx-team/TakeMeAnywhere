import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/App.js';
import { Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import MoodPage from './containers/MoodPage.js';
import AboutPage from './pages/About/AboutPage.js';


export default (
  <Route path="/" component={App}>
    <Route path="mood" component={MoodPage} />
    <Route path="about" component={AboutPage} />
  </Route>
)