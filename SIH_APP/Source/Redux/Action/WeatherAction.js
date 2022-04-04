import Constant from '../../Constant/ReduxConstant';

export const weatherAction = value => dispatch => {
  dispatch({type: Constant.WEATHER, payload: value});
};
