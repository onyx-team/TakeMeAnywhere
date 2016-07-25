import { SET_MOOD } from '../actions/index';

export default function (state = null, action) {
  switch(action.type) {
    case SET_MOOD :
      return action.payload;
  }
  return state;
}