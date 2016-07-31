import React from 'react';
import ResultPage from './ResultPage';
import MoodPageEntry from '../pages/Mood/MoodPageEntry.js';
import { connect } from 'react-redux';
import { setMood } from '../actions/index';
import { setCities } from '../actions/index';
import { bindActionCreators } from 'redux';
import Header from '../components/Header.js'
var Select = require('react-select');

class MoodPage extends React.Component {
  constructor(props) {
    super(props);

    this.onMoodClick = this.onMoodClick.bind(this);
  }

  addSelect(){

    let options = [];

    this.props.moods.forEach((mood, i) =>
      options.push( { value: mood.mood, label: mood.mood, moods: mood})
    )

    return options;
  }

  onMoodClick(mood) {
    this.props.setMood(mood.moods);
    this.props.setCities(mood.moods);
    window.location.hash ='#/constraints';
  }

  render() {
    return (
    <div>
      <Header />
      <div  className="container">
        <div id='main'>
         <Select
              name="form-field-name"
              value="one"
              placeholder="I want..."
              options={this.addSelect()}
              onChange={this.onMoodClick}
          />
        </div>
      </div>
    </div>
    )
  }
}


//moodData will now be available as props in MoodPage class
//Anytime the component updates, mapStateToProps will be called. Pass in the props here that you want to be available on your components.
function mapStateToProps(state) {
  return {
    moods: state.moods,
    activeMood: state.activeMood
  }
}
//When passing in an object o bindActionCreators, react assumes each will be an action creator. Use this to bind your action creators to props so that you can use those functions.
function mapDispatchToProps(dispatch) {
  return bindActionCreators({setMood: setMood, setCities: setCities}, dispatch);
}

// Connects a React component to a Redux store.
// It does not modify the component class passed to it.
// Instead, it returns a new, connected component class, for you to use.
export default connect(mapStateToProps, mapDispatchToProps)(MoodPage);

