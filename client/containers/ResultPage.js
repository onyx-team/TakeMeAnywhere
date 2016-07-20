import React from 'react';
import ReactDOM from 'react-dom';
import ResultPageEntry from '../pages/Result/ResultPageEntry.js';
import { connect } from 'react-redux';
import { setMood } from '../actions/index';
import { bindActionCreators } from 'redux';
import resultSelector from '../actions/index';
// import session from '..actions/requestHandler';
import moodSelector from '../actions/index';
<<<<<<< 7046383c8e289b9d2abe98b0cbcda1f40d5a8cad
import MoodDetail from './mood_detail';

=======
>>>>>>> Removes unnecessary Mood_Detail files. Removes console logs. Cleans up code.

class ResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.onResultClick = this.onResultClick;
  }

  onResultClick(result) {
    console.log("Omg you clicked", result);
  }

  // componentWillMount() {
  //   session();
  // }
  render() {
    console.log("Rendering Result", this.props);
    return (
      <div>
        {this.props.results.map((result, i) =>
          <ResultPageEntry
            onClick={ () => this.onResultClick(result) }
            key={i}
            result={result} />
        )}
      </div>
    )
  }
}
//moodData will now be available as props in MoodPage class
function mapStateToProps(state) {
<<<<<<< 7046383c8e289b9d2abe98b0cbcda1f40d5a8cad
  console.log(state)

  console.log("State change in Result", state);

=======
>>>>>>> Removes unnecessary Mood_Detail files. Removes console logs. Cleans up code.
  return {
    results: state.results,
    moods: state.moods,
    activeMood: state.activeMood
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({resultSelector: resultSelector, setMood: setMood, moodSelector: moodSelector}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);
