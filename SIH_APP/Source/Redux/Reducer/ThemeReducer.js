import Constant from '../../Constant/ReduxConstant';
const initTheme = {theme: 'light'};

const ThemeReducer = (state = initTheme, action) => {
  switch (action.type) {
    case Constant.THEME:
      return {...state, theme: action.payload};
    default:
      return state;
  }
};
export default ThemeReducer;
