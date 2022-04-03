import {combineReducers} from 'redux';

import ThemeReducer from './Reducer/ThemeReducer';
import WeatherReducer from './Reducer/WeatherReducer';

const ReducerIndex = combineReducers({
  theme: ThemeReducer,
  weather: WeatherReducer,
});
export default ReducerIndex;
