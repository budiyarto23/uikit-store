import {
    CHANGE_ISLOGIN,
    CHANGE_USER,
    LOGOUT_SUCCESS,
  } from "../action/types";
  
  const initialState = {
    isLogin: false,
    user: {},
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_ISLOGIN:
        return {
          ...state,
          isLogin: action.value,
        };
      case CHANGE_USER:
        return {
          ...state,
          user: action.value,
        };
      case LOGOUT_SUCCESS:
        return state;
      default:
        return state;
    }
  };
  
  export default reducer;
  