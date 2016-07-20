import React from 'react';
import ReactDOM from 'react-dom';
import ResultPageEntry from '../pages/Result/ResultPageEntry.js';
import { connect } from 'react-redux';
import { setMood } from '../actions/index';
import { bindActionCreators } from 'redux';
import resultSelector from '../actions/index';
// import session from '..actions/requestHandler';
import moodSelector from '../actions/index';
import MoodDetail from './mood_detail';


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
    console.log("Rendering Result", this.props, "state", this.state);
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
  console.log(state)

  console.log("State change in Result", state);

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
