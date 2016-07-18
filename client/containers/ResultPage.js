import React from 'react';
import ReactDOM from 'react-dom';
import ResultPageEntry from '../pages/Result/ResultPageEntry.js';
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
          <ResultPageEntry
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
    results: state.results
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({resultSelector: resultSelector}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);


