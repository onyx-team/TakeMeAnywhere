import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/App.js';
import { Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import MoodTable from './pages/Mood/MoodTable.js';
import TestPage from './pages/Test/testPage.js';
import AboutPage from './pages/About/AboutPage.js';
import routes from './routes.js';


ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, document.getElementById('app'));


