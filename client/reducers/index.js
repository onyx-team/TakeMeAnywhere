import { combineReducers } from 'redux';
import MoodReducer from './reducer_moods';
import ResultReducer from './reducer_results';
import ConstraintReducer from './reducer_constraints';
import ActiveMoodReducer from './reducer_active_mood';


const rootReducer = combineReducers({
  moods: MoodReducer,
  results: ResultReducer,
  constraints: ConstraintReducer,
  activeMood : ActiveMoodReducer
});

export default rootReducer;