import Constant from '../../Constant/ReduxConstant';

export const LanguageAction = value => dispatch => {
  dispatch({type: Constant.LANGUAGE, payload: value});
};
