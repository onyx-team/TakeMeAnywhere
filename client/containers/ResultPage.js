import React from 'react';
import ReactDOM from 'react-dom';
import ResultPageEntry from '../pages/Result/ResultPageEntry.js';
import { connect } from 'react-redux';
import { setMood } from '../actions/index';
import { bindActionCreators } from 'redux';
import resultSelector from '../actions/index';
// import session from '..actions/requestHandler';
import moodSelector from '../actions/index';
import { setFlights } from '../actions/index';
import axios from 'axios';

class ResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.onResultClick = this.onResultClick.bind(this);
    this.searchFlights = this.searchFlights.bind(this);
  }

  componentWillMount() {

    this.searchFlights(this.props.constraints[0], function(flights) {
      console.log("returned data", flights);
      this.props.setFlights(flights);
    });
  };

  searchFlights(options, callback) {
    console.log("OPTIONS", options);

    const envelope = {
      origin: options.value,
      dest: 'JFK',
      depart: options.depDate,
      returned: options.returnDate,
      priceLimit: parseInt(options.price),
      adults: parseInt(options.adults),
      kids: parseInt(options.children)
    };

    axios.post('/api/flights', envelope)
      .then(function(flights) {
        callback(flights);
      })
      .catch(function(err) {
        console.log("Couldn't grab flights: " + err);
      })
  }


  onResultClick() {
    console.log("Omg you clicked", arguments);
  }

  render() {
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
    results: state.results,
    moods: state.moods,
    activeMood: state.activeMood,
    constraints: state.constraints
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({resultSelector: resultSelector, setMood: setMood, moodSelector: moodSelector}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);


