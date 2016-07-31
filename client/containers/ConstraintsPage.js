import React from 'react';
import { Router, Route, Link, hashHistory} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setConstraints } from '../actions/index';
import { setFlights } from '../actions/index';
import Autosuggest from 'react-autosuggest';
import airports from '../../airports.js'

//lines 11 - 37 are from the react-autosuggest repository under basic usage -- https://github.com/moroshko/react-autosuggest.
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return airports.filter(airports => regex.test(airports.name));
}

function getSuggestionValue(suggestion) {

    return suggestion.iata;
}


function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

class ConstraintsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: getSuggestions(''),
      price: 400,
      depDate: '',
      returnDate: '',
      adults: 1,
      children: 0,
      cityError: '',
      depDateError: '',
      returnDateError: '',
      submitError: ''

    }
    this.changePrice = this.changePrice.bind(this);
    this.changeDepDate = this.changeDepDate.bind(this);
    this.changeReturnDate = this.changeReturnDate.bind(this);
    this.changeAdults = this.changeAdults.bind(this);
    this.changeChildren = this.changeChildren.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsUpdateRequested = this.onSuggestionsUpdateRequested.bind(this);
    this.saveInput = this.saveInput.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.makeDate = this.makeDate.bind(this);
  }
  //changes price state when price slider is changed
  changePrice(event) {
    this.setState({price: event.target.value });
  }

  //Input validation for when departure date is changed. When date is valid it will change the departure date state.
  changeDepDate(event) {
    let depDate = this.makeDate(event.target.value);
    let returnDate = this.makeDate(this.state.returnDate);
    let currentDate = new Date();

    if (depDate < currentDate) {
      this.state.depDateError = 'Please select a future date for your departure'
    } else if (returnDate < depDate) {
        this.state.returnDateError = 'Please make return date later than departure date'
        this.state.depDateError = '';
    } else {
      this.state.returnDateError = '';
      this.state.depDateError = '';
    }
    this.setState({depDate: event.target.value });
  }

  //Input validation for when the return date is changed. When date is valid it will change the return date state.
  changeReturnDate(event) {
    let depDate = this.makeDate(this.state.depDate);
    let returnDate = this.makeDate(event.target.value);

    if (returnDate < depDate) {
      this.state.returnDateError = 'Please make return date later than departure date'
    } else {
      this.state.returnDateError = ''
    }
    this.setState({returnDate: event.target.value });
  }

  //helper function used to convert dates passed from the date input into the new Date method. This allows the dates to be compared for validation.
  makeDate(date) {
    let dateArr = date.split('-')
    let year = dateArr[0];
    let month = dateArr[1];
    let day = dateArr[2];
    return new Date(year, month - 1, day);
  }

  //Changes the adult state when the number of adults is changed.
  changeAdults(event) {
    this.setState({adults: event.target.value });
  }

  //Changes the children state when the number of children is changed.
  changeChildren(event) {
    this.setState({children: event.target.value});
  }

  componentDidMount() {
    this.input.focus();
  }


  //Sets new state for departure city when the input is changed. Used for react-autosuggest.
  onChange(event, { newValue, method }) {
    this.setState({
      value: newValue
    });
  }

  //Updates the suggestions state whenever the input is changed in the departure state input box.
  onSuggestionsUpdateRequested({ value }) {
    this.setState({
      suggestions: getSuggestions(value)
    });
  }

  saveInput(autosuggest) {

    if (autosuggest){
      this.input = autosuggest.input;
    }
  }


  //Form validation for when the submit button is clicked. This makes sure all of the necessary fields are filled in and makes sure the airport code is the correct length.
  onSubmitClick() {
    if (this.state.value === "") {
      this.setState({submitError: 'Please enter your Departure City'})
    }
    else if (this.state.value.length !== 3) {
      this.setState({submitError: 'Invalid Airport Code'})
    }
    else if(this.state.depDate === "") {
      this.setState({submitError: 'Please enter your Departure Date'})
    }
    else if(this.state.returnDate === "") {
      this.setState({submitError: 'Please enter your Return Date'})
    }
    else {
      let st = arguments[0];
      //set constraints state
      this.props.setConstraints([st]);
      window.location.hash = '#/result'
    }
  }



  render() {

    const formStyle = {
      width: 175
    }
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Please enter 3 letter Airport code or search by city name",
      value,
      onChange: this.onChange
    };
    return (
           <div className="container">
        <div className='row constraint'>
          <h3>Your Airport</h3>
          <Autosuggest suggestions={suggestions}
                   onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
                   getSuggestionValue={getSuggestionValue}
                   renderSuggestion={renderSuggestion}
                   inputProps={inputProps}
                   ref={this.saveInput} />
          <div className="error">{this.state.cityError}</div>
        </div>
      <div className='row'>
        <div className='col-xs-3 constraint'>
          <h3>Price: ${this.state.price}</h3>
          <input type="range"
            id="price"
            style={formStyle}
            min="100"
            max="3000"
            value={this.state.price}
            onChange={this.changePrice}
            step="50" />
        </div>
        <div className='col-xs-3 constraint'>
          <h3>Departure Date</h3>
            <input type="date"
            className="form-control"
            style={formStyle}
            id="depDate"
            value={this.state.depDate}
            onChange={this.changeDepDate}/>
            <div className="error">{this.state.depDateError}</div>
        </div>
        <div className='col-xs-3 constraint'>
          <h3>Return Date</h3>
          <input type="date"
            className="form-control"
            style={formStyle}
            id="returnDate"
            value={this.state.returnDate}
            onChange={this.changeReturnDate} />
            <div className="error">{this.state.returnDateError}</div>
        </div>
      </div>
      <div className='row'>
      <div className='col-xs-3 constraint'>
        <h3>Adults</h3>
        <select className="form-control"
          id="adults"
          style={formStyle}
          value={this.state.adults}
          onChange={this.changeAdults}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
      </div>
      <div className='col-xs-3 constraint'>
        <h3>Children</h3>
        <select className="form-control"
          id="children"
          style={formStyle}
          value={this.state.children}
          onChange={this.changeChildren}>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
      </div>
      </div>
      <div className='row constraints'>
        <div className='col-xs-12 constraints'>
          <button className="button"
          onClick={() => this.onSubmitClick(this.state)}
          >Submit</button>
          <div className="error">{this.state.submitError}</div>
        </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    results: state.results,
    moods: state.moods,
    activeMood: state.activeMood
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({setConstraints: setConstraints}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ConstraintsPage);