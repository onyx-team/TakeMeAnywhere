import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import MoodPage from '../../containers/MoodPage.js';
import AboutPage from '../About/AboutPage.js';
import ResultPage from '../../containers/ResultPage.js';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default App;