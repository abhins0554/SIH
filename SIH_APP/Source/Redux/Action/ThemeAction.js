import Constant from '../../Constant/ReduxConstant';

export const ThemeAction = (value) => (dispatch) => {
    dispatch({ type: Constant.THEME, payload: value })
}