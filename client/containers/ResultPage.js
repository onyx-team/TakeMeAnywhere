import React from 'react';
import ReactDOM from 'react-dom';
import ResultPageEntry from '../pages/Result/ResultPageEntry.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import resultSelector from '../actions/index';

class ResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.onMoodClick = this.onResultClick.bind(this);
  }

  onResultClick(event) {
    //Maybe go to page with more detail?
    //Full flight information, full list of things to do, nearby
    //hotels, weather
  }

  render() {
    console.log("props in result page", this.props);
    return (
      <div>
        {this.props.results.map((result, i) =>
          <ResultPageEntry
            onClick={this.onResultClick}
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
    results: state.results
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({resultSelector: resultSelector}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);


