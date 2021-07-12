import firebase from "../../firebase";
import {
  CHANGE_ISLOADING,
  CHANGE_ISLOGIN,
  CHANGE_USER,
  MODAL_CLOSE,
  LOGOUT_SUCCESS,
} from "./types";

import { Redirect } from "react-router-dom";

export const closeModal = () => (dispatch) => {
  dispatch({ type: MODAL_CLOSE, value: false })
}

export const registerUserAPI = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: CHANGE_ISLOADING, value: true });
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        console.log("success. ", res);
        const dataUser = {
          email: res.user.email,
          uid: res.user.uid,
          emailVerified: res.user.emailVerified,
          refreshToken: res.user.refreshToken,
        };
        dispatch({ type: CHANGE_ISLOGIN, value: true });
        dispatch({ type: CHANGE_USER, value: dataUser });
        dispatch({ type: CHANGE_ISLOADING, value: false });
        resolve(dataUser);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(
          "ini error code",
          errorCode,
          "ini error message",
          errorMessage
        );
        dispatch({ type: CHANGE_ISLOADING, value: false });
        reject(false);
      });
  });
};

export const loginUserAPI = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: CHANGE_ISLOADING, value: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        const dataUser = {
          email: res.user.email,
          uid: res.user.uid,
          emailVerified: res.user.emailVerified,
          refreshToken: res.user.refreshToken,
        };
        dispatch({ type: CHANGE_ISLOADING, value: false });
        dispatch({ type: CHANGE_ISLOGIN, value: true });
        dispatch({ type: CHANGE_USER, value: dataUser });
        resolve(dataUser);
        <Redirect to="/admin-home-page" />
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        dispatch({ type: CHANGE_ISLOADING, value: false });
        dispatch({ type: CHANGE_ISLOGIN, value: false });
        reject(false);
      });
  });
};

export const logOut = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    firebase.auth().signOut().then(() => {
      localStorage.clear();
      resolve(true);
      dispatch({ type: LOGOUT_SUCCESS });
      dispatch({ type: CHANGE_ISLOGIN, value: false });
    }).catch((err) => {
      dispatch({ type: CHANGE_ISLOGIN, value: true });
      reject(false);
    });
  })
}

