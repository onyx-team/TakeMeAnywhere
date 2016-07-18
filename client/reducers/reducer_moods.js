import { FETCH_MOOD } from '../actions/index';

export default function(state=null, action) {
  // switch(action.type) {
  //   case FETCH_MOOD:
  //     return action.payload;
  // }

  // return;

  return [
    {
      mood: 'party'
    },
    {
      mood: 'nature'
    },
    {
      mood: 'adventure'
    },
    {
      mood: 'city'
    },
    {
      mood: 'solitude'
    },
    {
      mood: 'romantic'
    },
    {
      mood: 'foodie'
    },
    {
      mood: 'historic'
    },
    {
      mood: 'family'
    }
  ]
}