import React from 'react';
import ReactDOM from 'react-dom';
import ResultPageEntry from '../pages/Results/ResultPageEntry.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import resultSelector from '../actions/index';

class ResultPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.moods.map((mood, i) =>
          <MoodPageEntry
            onClick={this.onMoodClick}
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
    moods: state.moods
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({moodSelector: moodSelector}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MoodPage);


