import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import MoodPage from '../../containers/MoodPage.js';
import AboutPage from '../About/AboutPage.js';
import ResultPage from '../../containers/ResultPage.js';
import ConstraintsPage from '../../containers/ConstraintsPage.js';
import Header from '../../components/Header.js'


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <Header />
        {this.props.children}
      </div>
    )
  }
}

export default App;