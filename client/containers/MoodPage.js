import React from 'react';
import MoodPageEntry from '../pages/Mood/MoodPageEntry.js';
  //connects this props and state in reducer
import { connect } from 'react-redux';
  //importing the action creator
import { moodSelector } from '../actions/index';
  //binds action creator to MoodPage
import { bindActionCreators } from 'redux';
import { setMood } from '../actions/index'
import { bindActionCreators } from 'redux';
import moodSelector from '../actions/index';
<<<<<<< 7046383c8e289b9d2abe98b0cbcda1f40d5a8cad
import MoodDetail from './mood_detail';

=======
>>>>>>> Removes unnecessary Mood_Detail files. Removes console logs. Cleans up code.

class MoodPage extends React.Component {
  constructor(props) {
    super(props);
    this.onMoodClick = this.onMoodClick
  }

  onMoodClick(mood) {
    this.props.moodSelector(mood);
    window.location.hash ='#/about';
  }

  render() {
    console.log(this.props.moods);
    return (
      <div>
        {this.props.moods.map((mood, i) =>
          <MoodPageEntry
            onMoodClick={() => this.onMoodClick(mood)}
            key={i}
            moods={mood} />
        )}
      </div>
    )
    this.props.setMood(mood);
    window.location.hash = '#/result'
  }

  render() {
    if (this.props.moods){
      return (
        <div>
          {this.props.moods.map((mood, i) =>
            <MoodPageEntry
              onClick={ () => this.onMoodClick(mood) }
              key={i}
              moods={mood} />
          )}
        </div>
      )
    }
  }
}
//moodData will now be available as props in MoodPage class
function mapStateToProps(state) {
  return {
    moods: state.moods,
    activeMood: state.activeMood
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({moodSelector: moodSelector, setMood: setMood}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MoodPage);
