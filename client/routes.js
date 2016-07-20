import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/App.js';
import { Router, Route, Link, hashHistory, IndexRoute, Redirect} from 'react-router';
import MoodPage from './containers/MoodPage.js';
import AboutPage from './pages/About/AboutPage.js';
import ResultPage from './containers/ResultPage.js';
import Constraints from './containers/ConstraintsPage.js';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={MoodPage} />
    <Route path="about" component={AboutPage} />
    <Route path="result" component={ResultPage} />
    <Route path="constraints" component={Constraints} />
  </Route>
)