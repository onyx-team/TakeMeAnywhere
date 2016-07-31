import React from 'react';
import ReactDOM from 'react-dom';
import ResultPageEntry from '../pages/Result/ResultPageEntry.js';
import HotelPageEntry from '../pages/Result/HotelPageEntry.js';
import FeaturePage from '../pages/Result/FeaturePage.js';
import { connect } from 'react-redux';
import { setMood, setRestaurants, setBars, setAttractions } from '../actions/index';
import { bindActionCreators } from 'redux';
import resultSelector from '../actions/index';
import moodSelector from '../actions/index';
import { setFlights } from '../actions/index';
import axios from 'axios';
import NoResult from '../pages/Result/NoResults';
import $ from 'jquery';
const Loader = require('react-loader');


class ResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.searchFlights = this.searchFlights.bind(this);
  }

  //Spinner functionality:
    // Initial state of loaded set to false
    //Once loaded is true, the spinner will disappear
  componentWillMount() {

    const context = this;

    this.setState({
      loaded: false,
      feature: ""
    });

    // Loops through each city select by the moodselector and does a post request to the express route
    this.props.cities.forEach(function(cityObj){
      context.searchFlights(context.props.constraints[0], cityObj,  function(flights) {
        context.props.setFlights(flights);
      });
    });

    // Query Wikipedia for city's description
    this.fetchDescription(this.props.cities[0].city, function(description){
      context.setState({
        feature: description
      })
    });

    // Query Yelp for top 5 restaurants and set the store
    this.searchYelp('restaurants', this.props.cities[0].city, function(data){
      context.props.setRestaurants(data.data.businesses);
    });

    // Query Yelp for top 5 bars and set the store
    this.searchYelp('bars', this.props.cities[0].city, function(data){
      context.props.setBars(data.data.businesses);
    });

    // Query Yelp for top 5 tourist attractions and set the store
    this.searchYelp('tourist attractions', this.props.cities[0].city, function(data){
      context.props.setAttractions(data.data.businesses);
    });

  };

  componentDidMount(){
  }

  // Queries Yelp for Restaurants, Bars and Tourist Attractions
  searchYelp(type, location, cb) {

    const query = {
      term: type,
      location: location,
      limit: 5
    }

    axios.post('/api/yelp', query)
      .then(function(data) {
        cb(data);
      })
      .catch(function(err) {
        console.log("Couldn't grab info: " + err);
      })

  }

  // Queries Skyscanner for flights
  searchFlights(options, cityObj, callback) {

    const envelope = {
      origin: options.value,
      dest: cityObj.airport,
      depart: options.depDate,
      returned: options.returnDate,
      priceLimit: parseInt(options.price),
      adults: parseInt(options.adults),
      kids: parseInt(options.children),
      city: cityObj.city,
      cityLink: cityObj.cityLink
    };

    axios.post('/api/flights', envelope)
      .then(function(flights) {
        callback(flights);
      })
      .catch(function(err) {
        console.log("Couldn't grab flights: " + err);
      })
  }

  // Fetches the City's Description from Wikipedia
  fetchDescription(city, callback){

    const cityOnly = city.split(',');

    const query = {
      titles: cityOnly[0]
    };

    axios.post('/api/wiki', query)
      .then(function(description){
        const key = Object.keys(description.data.query.pages)[0];
        const value = description.data.query.pages[key].extract;
        callback(value);
      })
      .catch(function(err) {
        console.log("Couldn't grab description: " + err);
      })
  }

  //Once the component receives its results, we set loaded to true to disable the spinner.
  componentWillReceiveProps(){
    this.setState({
      loaded: true
    });
  }

  render() {
    let resultsExist = true;

    console.log(this.props);

    // Sets the condition to create noresults component
    if(this.props.results.length === 0 && this.state.loaded){
        resultsExist = false;
    }
    let options = {
    lines: 17,
    length: 28,
    width: 2,
    radius: 36,
    corners: 1,
    opacity: .05,
    rotate: 0,
    direction: 1,
    color: 'white',
    speed: 1,
    trail: 100,
    shadow: false,
    hwaccel: false,
    zIndex: 2e9,
    top: '50%',
    left: '50%',
    scale: 1.00
    };

    let hotels = [];

    if(this.props.results.length > 0){
      hotels = this.props.results[0].hotelList
    }

    return (
      <div className="container">
        <div className='row row-centered'>
          <a href="/" className="btn btn-danger row row-centered">New Search</a>
          <Loader loaded={this.state.loaded} options={options} className="spinner" />
          <NoResult exists = {resultsExist}/>
          <FeaturePage description={this.state.feature} city={this.props.cities[0].city} img={this.props.cities[0].img}/>
          {this.props.results.sort(function(a,b){
            return a.price - b.price;
          }).map((result, i) =>
            <ResultPageEntry
              key={i}
              result= {result}
              className='col-xs-3 col-centered' />
          )}
          {hotels.map((result, i) =>
            <HotelPageEntry
              key={i}
              result= {result}
              className='col-xs-3 col-centered' />
          )}
        </div>
      </div>
    )
  }
}

//moodData will now be available as props in MoodPage class
//Anytime the component updates, mapStateToProps will be called. Pass in the props here that you want to be available on your components.
function mapStateToProps(state) {
  return {
    results: state.results,
    moods: state.moods,
    activeMood: state.activeMood,
    constraints: state.constraints,
    cities: state.cities,
    restaurants: state.restaurants,
    bars: state.bars,
    attractions: state.attractions
  }
}

//When passing in an object o bindActionCreators, react assumes each will be an action creator. Use this to bind your action creators to props so that you can use those functions.
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setFlights: setFlights,
    resultSelector: resultSelector,
    setMood: setMood,
    moodSelector: moodSelector,
    setRestaurants: setRestaurants,
    setBars: setBars,
    setAttractions: setAttractions
  }, dispatch);
}

// Connects a React component to a Redux store.
// It does not modify the component class passed to it.
// Instead, it returns a new, connected component class, for you to use.

export default connect(mapStateToProps, mapDispatchToProps)(ResultPage);


