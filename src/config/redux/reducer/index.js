import {
  CHANGE_ISLOADING,
  CHANGE_ISLOGIN,
  CHANGE_USER,
  ADD_KIT_SUCCESS,
  MODAL_OPEN,
  MODAL_CLOSE,
  LOGOUT_SUCCESS
} from "../action/types";

const initialState = {
  isLoading: false,
  isLogin: false,
  user: {},
  modalOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ISLOADING:
      return {
        ...state,
        isLoading: action.value,
      };
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
    case ADD_KIT_SUCCESS:
      return {
        ...state,
        kits: action.value,
      };
    case MODAL_OPEN:
      return {
        ...state,
        modalOpen: action.value,
      };
    case MODAL_CLOSE:
      return {
        ...state,
        modalOpen: action.value,
      }
      case LOGOUT_SUCCESS:
        return state
    default:
      return state;
  }
};

export default reducer;
