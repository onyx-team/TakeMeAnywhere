import { combineReducers } from 'redux';
import MoodReducer from './reducer_moods';
import ResultReducer from './reducer_results';
import ConstraintReducer from './reducer_constraints';

const rootReducer = combineReducers({
  moods: MoodReducer,
  results: ResultReducer,
  constraints: ConstraintReducer
});

export default rootReducer;