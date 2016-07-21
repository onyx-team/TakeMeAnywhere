import { combineReducers } from 'redux';
import MoodReducer from './reducer_allMoods';
import ResultReducer from './reducer_results';
import ConstraintReducer from './reducer_constraints';
import ActiveMoodReducer from './reducer_active_mood';


const rootReducer = combineReducers({
  moods: MoodReducer,
  constraints: ConstraintReducer,
  activeMood : ActiveMoodReducer,
  results: ResultReducer
});

export default rootReducer;