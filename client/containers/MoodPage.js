import React from 'react';
import ResultPage from './ResultPage';
import MoodPageEntry from '../pages/Mood/MoodPageEntry.js';
import { connect } from 'react-redux';
import { setMood } from '../actions/index';
import { setCities } from '../actions/index';
import { bindActionCreators } from 'redux';

class MoodPage extends React.Component {
  constructor(props) {
    super(props);
    this.onMoodClick = this.onMoodClick.bind(this);
  }

  onMoodClick(mood) {
    this.props.setMood(mood);
    this.props.setCities(mood);
    window.location.hash ='#/constraints';
  }

  render() {
    return (
      <div className='blueBackground container-fluid'>
      {this.props.moods.map((mood, i) =>
        <MoodPageEntry
          onMoodClick={() => this.onMoodClick(mood) }
          key={i}
          moods={mood}
          />
      )}
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

