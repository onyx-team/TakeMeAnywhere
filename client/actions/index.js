import cities from '../utils/moodcities';

export const FETCH_RESULTS= 'FETCH_RESULTS';
export const SET_CONSTRAINTS = 'SET_CONSTRAINTS';
export const SET_MOOD = 'SET_MOOD';
export const SET_FLIGHTS = 'SET_FLIGHTS';
export const FETCH_MOOD = 'FETCH_MOOD';
export const SET_CITIES = 'SET_CITIES';
export const SET_WIKI = 'SET_WIKI';
export const SET_RESTAURANTS = 'SET_RESTAURANTS';
export const SET_BARS = 'SET_BARS';
export const SET_ATTRACTIONS = 'SET_ATTRACTIONS';
export const SET_WEATHER = 'SET_WEATHER';


/******************************
      Action Creators

  Action Creators return objects with a type (an event the reducer will listen for) and payload (data formatted into desired form)

******************************/
export function setCities(mood){
  var city = cities[mood.mood];
  return {
    type: SET_CITIES,
    payload: city
  }
}

export function setMood(mood) {
  return {
    type: SET_MOOD,
    payload: mood
  }
}

export function resultSelector(result) {
  return {
    type: FETCH_RESULTS,
    payload: result
  }
}

export function setConstraints(constraints) {
  return {
    type: SET_CONSTRAINTS,
    payload: constraints
  }
}

//flights here should be the result of the get request
export function setFlights(flights) {
  return {
    type: SET_FLIGHTS,
    payload: flights.data
  }
}

export function setRestaurants(restaurants) {
  return {
    type: SET_RESTAURANTS,
    payload: restaurants
  }
}

export function setBars(bars) {
  return {
    type: SET_BARS,
    payload: bars
  }
}

export function setAttractions(attractions) {
  return {
    type: SET_ATTRACTIONS,
    payload: attractions
  }
}

export function setWeather(weather) {
  return {
    type: SET_WEATHER,
    payload: weather
  }
}




