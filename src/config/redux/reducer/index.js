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

