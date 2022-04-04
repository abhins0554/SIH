import Constant from '../../Constant/ReduxConstant';
const initLanguage = {language: 'en'};

const LanguageReducer = (state = initLanguage, action) => {
  switch (action.type) {
    case Constant.LANGUAGE:
      return {...state, theme: action.payload};
    default:
      return state;
  }
};
export default LanguageReducer;
