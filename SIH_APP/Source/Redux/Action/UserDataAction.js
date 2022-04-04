import Constant from '../../Constant/ReduxConstant';

export const userDataAction = value => dispatch => {
  dispatch({type: Constant.USERDATA, payload: value});
};
