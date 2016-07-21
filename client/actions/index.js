// Constant Actions

export const FETCH_RESULTS= 'FETCH_RESULTS';
export const SET_CONSTRAINTS = 'SET_CONSTRAINTS';
export const SET_MOOD = 'SET_MOOD';
export const SET_FLIGHTS = 'SET_FLIGHTS';

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
  console.log("Contraints Obj", constraints);
  return {
    type: SET_CONSTRAINTS,
    payload: constraints
  }
}

//flights here should be the result of the get request
export function setFlights(flights) {
  return {
    type: SET_FLIGHTS,
    payload: flights
  }
}