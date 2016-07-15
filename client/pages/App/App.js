import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import MoodTable from '../Mood/MoodTable.js';
import TestPage from '../Test/testPage.js';
import AboutPage from '../About/AboutPage.js';

var team = [
  {name: 'Emily', description: 'Hello', img: 'https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg'},
  {name: 'Ji', description: 'Hello', img: 'http://i.telegraph.co.uk/multimedia/archive/02830/cat_2830677b.jpg'},
  {name: 'Kyle', description: 'Hello', img: 'http://www.tehcute.com/pics/201110/marshmellow-kitten-big.jpg'},
  {name: 'Nick', description: 'Hello', img: 'http://thecutest.org/wp-content/uploads/2016/04/cute-kittens-13.jpg'},
]


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>JK JI!!!!!!!!!!!!!!!!</h1>
        <h2>JK JI!!!!!!!!!!!!!!!!</h2>
        <h3>JK JI!!!!!!!!!!!!!!!!</h3>
        <h4>JK JI!!!!!!!!!!!!!!!!</h4>
        <h5>JK JI!!!!!!!!!!!!!!!!</h5>
        <h6>JK JI!!!!!!!!!!!!!!!!</h6>
        <p>JK JI!!!!!!!!!!!!!!!!</p>
        <span>JK JI!!!!!!!!!!!!!!!!</span>
        <div>JK JI!!!!!!!!!!!!!!!!</div>
      </div>
    )
  }
}

export default App