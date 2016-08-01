import { SET_WEATHER } from '../actions/index';

  /*
    State is set to an array and each result coming from the action creator is concated into it.

    State should never be mutated.
    Opt to use concat() over push() since concat returns a new array with specified inputs as opposed to push, which adds to the existing array
  */

export default function(state=[], action) {
  switch(action.type) {
    case SET_WEATHER:
      return state.concat(action.payload);
}
  return state;
}