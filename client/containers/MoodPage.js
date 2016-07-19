import React from 'react';
import ResultPage from './ResultPage';
import MoodPageEntry from '../pages/Mood/MoodPageEntry.js';
  //connects this props and state in reducer
import { connect } from 'react-redux';
  //importing the action creator
import { moodSelector } from '../actions/index';
  //binds action creator to MoodPage
import { setMood } from '../actions/index';
import { bindActionCreators } from 'redux';

class MoodPage extends React.Component {
  constructor(props) {
    super(props);
    this.onMoodClick = this.onMoodClick.bind(this);
  }

  onMoodClick(mood) {
    this.props.moodSelector(mood);
    window.location.hash ='#/constraints';
  }


  render() {
    return (
      <div>
        {this.props.moods.map((mood, i) =>
          <MoodPageEntry
            onMoodClick={() => this.onMoodClick(mood) }
            key={i}
            moods={mood} />
        )}
      </div>
    )
  }
}
//moodData will now be available as props in MoodPage class
function mapStateToProps(state) {
  return {
    moods: state.moods,
<<<<<<< ecd98e4d897468289e90a4c7a17bdf2e0eeb37a1
    activeMood: state.activeMood
=======
    results: state.results
>>>>>>> register state for both mood and result page
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({moodSelector: moodSelector, setMood: setMood}, dispatch);
}

<<<<<<< ecd98e4d897468289e90a4c7a17bdf2e0eeb37a1
export default connect(mapStateToProps, mapDispatchToProps)(MoodPage);
=======
export default connect(mapStateToProps, mapDispatchToProps)(MoodPage, ResultPage);


>>>>>>> register state for both mood and result page
