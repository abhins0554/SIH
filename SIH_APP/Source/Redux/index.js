import {combineReducers} from 'redux';

import ThemeReducer from './Reducer/ThemeReducer';
import WeatherReducer from './Reducer/WeatherReducer';
import LanguageReducer from './Reducer/LanguageReducer';

const ReducerIndex = combineReducers({
  theme: ThemeReducer,
  weather: WeatherReducer,
  language: LanguageReducer,
});
export default ReducerIndex;
