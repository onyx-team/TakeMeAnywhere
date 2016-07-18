export const FETCH_MOOD = 'FETCH_MOOD';

export function moodSelector(mood) {
  return {
    type: FETCH_MOOD,
    payload: mood
  }
}