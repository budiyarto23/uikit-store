import { combineReducers } from "redux";
import authReducer from './authReducer';
import kitsReducer from './kitsReducer';
import utilsReducer from './utilsReducer';

export default combineReducers (
  {
      auth: authReducer,
      kits: kitsReducer,
      utils: utilsReducer
  }
);

// import {
//   CHANGE_ISLOADING,
//   CHANGE_ISLOGIN,
//   CHANGE_USER,
//   ADD_KIT_SUCCESS,
//   MODAL_OPEN,
//   MODAL_CLOSE,
//   LOGOUT_SUCCESS,
//   GET_KITS,
//   SKELETON_ON,
// } from "../action/types";

// const initialState = {
//   isLoading: false,
//   loading: false,
//   isLogin: false,
//   user: {},
//   modalOpen: false,
//   kitsCollection: [],
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case CHANGE_ISLOADING:
//       return {
//         ...state,
//         isLoading: action.value,
//       };
//     case CHANGE_ISLOGIN:
//       return {
//         ...state,
//         isLogin: action.value,
//       };
//     case CHANGE_USER:
//       return {
//         ...state,
//         user: action.value,
//       };
//     case ADD_KIT_SUCCESS:
//       return {
//         ...state,
//         kits: action.value,
//       };
//     case MODAL_OPEN:
//       return {
//         ...state,
//         modalOpen: action.value,
//       };
//     case MODAL_CLOSE:
//       return {
//         ...state,
//         modalOpen: action.value,
//       };
//     case LOGOUT_SUCCESS:
//       return state;
//     case GET_KITS:
//       return {
//         ...state,
//         kitsCollection: action.value,
//         // isloading: false
//       };

//     // case SKELETON_ON:
//     //   return {
//     //     ...state,
//     //     loading: true,
//     //   };
//     default:
//       return state;
//   }
// };

// export default reducer;

