export const FETCH_MOOD = 'FETCH_MOOD';
export const FETCH_RESULTS= 'FETCH_RESULTS';


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