import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/App.js';
import { Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import MoodTable from './pages/Mood/MoodTable.js';
import TestPage from './pages/Test/testPage.js';
import AboutPage from './pages/About/AboutPage.js';


class JiSucks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <h2>Don't change your name Ji</h2>
    )
  }
}

export default (
  <Route path="/" component={MoodTable}>
    <IndexRoute component={MoodTable}/>
    <Route path="mood" component={JiSucks} />
    <Route path="about" component={AboutPage} />
  </Route>
)