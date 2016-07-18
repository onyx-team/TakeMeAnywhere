import { combineReducers } from 'redux';
import MoodReducer from './reducer_moods';
import ResultReducer from './reducer_results';


const rootReducer = combineReducers({
  moods: MoodReducer,
  results: ResultReducer
});

export default rootReducer;