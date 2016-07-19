export const FETCH_MOOD = 'FETCH_MOOD';

export function moodSelector(mood) {
  console.log("THE MOOD ", mood);
  return {
    type: FETCH_MOOD,
    payload: mood
  }
}