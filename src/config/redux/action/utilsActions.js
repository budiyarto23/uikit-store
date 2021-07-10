import {
  MODAL_CLOSE,
} from "./types";

export const closeModal = () => (dispatch) => {
  dispatch({ type: MODAL_CLOSE, value: false })
}