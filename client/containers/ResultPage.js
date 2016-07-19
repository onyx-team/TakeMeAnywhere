import React from 'react';
import ReactDOM from 'react-dom';
import ResultPageEntry from '../pages/Result/ResultPageEntry.js';
import { connect } from 'react-redux';
import { setMood } from '../actions/index';
import { bindActionCreators } from 'redux';
import resultSelector from '../actions/index';
// import session from '..actions/requestHandler';
import moodSelector from '../actions/index';

class ResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.onResultClick = this.onResultClick;
  }

<<<<<<< ecd98e4d897468289e90a4c7a17bdf2e0eeb37a1
  onResultClick(result) {
    console.log("Omg you clicked", result);
=======
  componentWillMount() {

  }

  onResultClick() {
    console.log("Omg you clicked", arguments);
>>>>>>> register state for both mood and result page
  }

  render() {
<<<<<<< ecd98e4d897468289e90a4c7a17bdf2e0eeb37a1
    console.log("Rendering Result", this.props);
=======

>>>>>>> register state for both mood and result page
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
  return {
<<<<<<< ecd98e4d897468289e90a4c7a17bdf2e0eeb37a1
    results: state.results,
    moods: state.moods,
    activeMood: state.activeMood
=======
    moods: state.moods,
    results: state.results
>>>>>>> register state for both mood and result page
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({resultSelector: resultSelector, setMood: setMood, moodSelector: moodSelector}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);


