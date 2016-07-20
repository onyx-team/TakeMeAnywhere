import { FETCH_FLIGHTS } from '../actions/index';

export default function(state=null, action) {
  switch(action.type) {
    case FETCH_FLIGHTS:
      return action.payload;
  }

  return [
    {
      value: '',
      suggestions: '',
      city: 'SFO',
      price: 400,
      depDate: '',
      returnDate: '',
      adults: 5,
      children: 0

    }

  ]


}