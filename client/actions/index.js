import cities from '../utils/moodcities';

export const FETCH_RESULTS= 'FETCH_RESULTS';
export const SET_CONSTRAINTS = 'SET_CONSTRAINTS';
export const SET_MOOD = 'SET_MOOD';
export const SET_FLIGHTS = 'SET_FLIGHTS';
export const FETCH_MOOD = 'FETCH_MOOD';
export const SET_CITIES = 'SET_CITIES';
export const SET_WIKI= 'SET_WIKI';

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