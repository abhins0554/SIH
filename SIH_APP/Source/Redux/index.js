import {combineReducers} from 'redux';

import ThemeReducer from './Reducer/ThemeReducer';
import WeatherReducer from './Reducer/WeatherReducer';
import LanguageReducer from './Reducer/LanguageReducer';
import UserDataReducer from './Reducer/UserDataRedcer';

const ReducerIndex = combineReducers({
  theme: ThemeReducer,
  weather: WeatherReducer,
  language: LanguageReducer,
  userdata: UserDataReducer,
});
export default ReducerIndex;
