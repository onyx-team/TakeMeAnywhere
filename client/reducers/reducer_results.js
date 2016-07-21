import { SET_FLIGHTS } from '../actions/index';

export default function(state=[], action) {
  switch(action.type) {
    case SET_FLIGHTS:
      // return action.payload;
      return state.concat(action.payload);
}
  return state;
}