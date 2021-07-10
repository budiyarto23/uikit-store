import {
    CHANGE_ISLOADING,
    MODAL_OPEN,
    MODAL_CLOSE,
  } from "../action/types";
  
  const initialState = {
    isLoading: false,
    modalOpen: false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case CHANGE_ISLOADING:
        return {
          ...state,
          isLoading: action.value,
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
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  