export const FETCH_MOOD = 'FETCH_MOOD';
export const FETCH_RESULTS= 'FETCH_RESULTS';
export const FETCH_FLIGHTS = 'FETCH_FLIGHTS';
export const SET_MOOD= 'SET_MOOD';

export function setMood(mood) {
  console.log("Actions-index.js-setMood:", mood);
  return {
    type: SET_MOOD,
    payload: mood
  }
}

export function moodSelector(mood) {
  return {
    type: FETCH_MOOD,
    payload: mood
  }
}

export function resultSelector(result) {
  return {
    type: FETCH_RESULTS,
    payload: result
  }
}

export function constraintSelector(constraints) {
  return {
    type: FETCH_FLIGHTS,
    payload: {
      value: constraints.value,
      price: constraints.price,
      depDate: constraints.depDate,
      returnDate: constraints.returnDate,
      adults: constraints.adults,
      children: constraints.children
    }
  }
}