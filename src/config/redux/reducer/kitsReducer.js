import {
    GET_KITS,
  } from "../action/types";
  
  const initialState = {
    kitsCollection: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_KITS:
        return {
          ...state,
          kitsCollection: action.value,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  