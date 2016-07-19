import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/App.js';
import { Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import MoodPage from './containers/MoodPage.js';
import AboutPage from './pages/About/AboutPage.js';
<<<<<<< 4b6818fc0f068df7ca4894c078412d2ece73e8b0
import ResultPage from './containers/ResultPage.js';
=======
import Constraints from './containers/ConstraintsPage.js';
>>>>>>> add constraints page


export default (
  <Route path="/" component={App}>
    <Route path="mood" component={MoodPage} />
    <Route path="about" component={AboutPage} />
<<<<<<< 4b6818fc0f068df7ca4894c078412d2ece73e8b0
    <Route path="result" component={ResultPage} />
=======
    <Route path="constraints" component={Constraints} />
>>>>>>> add constraints page
  </Route>
)