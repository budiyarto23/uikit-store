import { DOWNLOAD_KITS, GET_KITS, CUSTOM_KITS } from "../action/types";

const initialState = {
  kitsCollection: [],
  kitsDownload: [],
  kitsCustom: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_KITS:
      return {
        ...state,
        kitsCollection: action.value,
      };
    case DOWNLOAD_KITS:
      return {
        ...state,
        kitsDownload: action.value,
      };
    case CUSTOM_KITS:
      return {
        ...state,
        kitsCustom: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
