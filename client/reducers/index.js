import { combineReducers } from 'redux';
import MoodReducer from './reducer_moods';

const rootReducer = combineReducers({
  moods: MoodReducer
});

export default rootReducer;