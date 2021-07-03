import firebase, { database, storage } from "../../firebase";
import {
  CHANGE_ISLOADING,
  CHANGE_ISLOGIN,
  CHANGE_USER,
  // ADD_KIT_SUCCESS,
  MODAL_OPEN,
  MODAL_CLOSE,
  LOGOUT_SUCCESS
} from "./types";

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
        dispatch({ type: CHANGE_ISLOADING, value: false });
        resolve(true);
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
        console.log("login berhasil ", res);
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

export const addNewKit = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: CHANGE_ISLOADING, value: true });
    const promises = data.images.map((file) => {
      const metadata = { contentType: "image/jpeg" };
      const uidLocalStorage = localStorage.getItem("userId");
      const ref = storage.ref().child(`kit-image/${uidLocalStorage}/${file.name}`);
      return ref.put(file, metadata).then(() => ref.getDownloadURL());
    });

    Promise.all(promises)
      .then((fileDownloadUrls) => {
        const idLocalStorage = localStorage.getItem("userId");
        database
          .ref("uicollcetions/" + idLocalStorage)
          .push({
            date: data.date,
            status: data.status,
            linkDownload: data.linkDownload,
            productName: data.productName,
            productDescription: data.productDescription,
            category: data.category,
            benefits: data.benefits,
            images: fileDownloadUrls,
            idrPrice: data.idrPrice,
            idrBuyout: data.idrBuyout,
            usdPrice: data.usdPrice,
            usdBuyout: data.usdBuyout,
            discount: data.discount
          })
          .then((res) => {
            console.log("this success response", + res);
            dispatch({ type: CHANGE_ISLOADING, value: false });
            dispatch({ type: MODAL_OPEN, value: true });
          })
          .catch((err) => {
            console.log("this error response", err);
            dispatch({ type: CHANGE_ISLOADING, value: false });
          });
        resolve(true);
      })
      .catch((err) => console.log(err));
    reject(false);
  });
};
