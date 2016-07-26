import { SET_MOOD } from '../actions/index';

  /*
    State should be set to null initially. Why?
      a) Before the app fully loads, Redux will complete a cycle of all reducers and state.
      b) State will initially be undefined (React does not like this) so set it equal to null
      c) Any subsequent calls to this reducer will set the action to the payload coming from the action creator
  */
export default function (state = null, action) {
  switch(action.type) {
    case SET_MOOD :
      return action.payload;
  }
  return state;
}