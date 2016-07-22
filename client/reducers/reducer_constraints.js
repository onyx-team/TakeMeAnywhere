import { SET_CONSTRAINTS } from '../actions/index';

export default function(state=null, action) {
  switch(action.type) {
    case SET_CONSTRAINTS:
      return action.payload;
  }

  return state;

}