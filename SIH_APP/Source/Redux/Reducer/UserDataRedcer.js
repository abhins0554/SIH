import Constant from '../../Constant/ReduxConstant';
const initTheme = {userdata: {}};

const UserDataReducer = (state = initTheme, action) => {
  switch (action.type) {
    case Constant.USERDATA:
      return {...state, userdata: action.payload};
    default:
      return state;
  }
};
export default UserDataReducer;
