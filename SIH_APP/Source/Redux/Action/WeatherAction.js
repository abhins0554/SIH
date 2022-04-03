import Constant from '../../Constant/ReduxConstant';

export const WeatherAction = value => dispatch => {
  dispatch({type: Constant.WEATHER, payload: value});
};
