import {combineReducers} from 'redux';
import ThemeReducer from './Reducer/ThemeReducer';
const ReducerIndex = combineReducers({
  theme: ThemeReducer,
});
export default ReducerIndex;
