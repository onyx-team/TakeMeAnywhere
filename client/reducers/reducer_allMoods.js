import { FETCH_MOOD } from '../actions/index';
import { SET_MOOD } from '../actions/index';


export default function(state=null, action) {

  return [
    { mood: 'party' },
    { mood: 'nature' },
    { mood: 'adventure' },
    { mood: 'city' },
    { mood: 'solitude' },
    { mood: 'romantic' },
    { mood: 'foodie' },
    { mood: 'historic' },
    { mood: 'family' },
    { mood: 'adventure'},
    { mood: 'city'},
    { mood: 'solitude'},
    { mood: 'romantic'},
    { mood: 'foodie'},
    { mood: 'historic'},
    { mood: 'family'}
  ]
};