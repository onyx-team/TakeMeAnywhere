import { combineReducers } from 'redux';
import MoodReducer from './reducer_allMoods';
import ResultReducer from './reducer_results';
import ConstraintReducer from './reducer_constraints';
import ActiveMoodReducer from './reducer_active_mood';
import CityReducer from './reducer_moodCities';
import RestaurantsReducer from './reducer_restaurants';
import BarsReducer from './reducer_bars';
import AttractionsReducer from './reducer_attractions';
import WeatherReducer from './reducer_weather';

/*
  rootReducer combines all reducers from the app and combines it all into a single state object a.k.a the store;

  The results of this modularization of reducers allows us to access them via props in the containers as such:
    a) this.props.moods => output of MoodReducer
    b) this.props.contstraints => output of ConstraintReducer
    c) etc...
*/

const rootReducer = combineReducers({
  moods: MoodReducer,
  constraints: ConstraintReducer,
  activeMood : ActiveMoodReducer,
  results: ResultReducer,
  cities: CityReducer,
  restaurants: RestaurantsReducer,
  bars: BarsReducer,
  attractions: AttractionsReducer,
  weather: WeatherReducer
});

export default rootReducer;