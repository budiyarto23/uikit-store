import { database, storage } from "../../firebase";
import {
  CHANGE_ISLOADING,
  GET_KITS,
  GET_POPULAR_KITS,
  MODAL_OPEN,
  DOWNLOAD_KITS,
  CUSTOM_KITS,
} from "./types";

export const addNewKit = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: CHANGE_ISLOADING, value: true });
    const promises = data.images.map((file) => {
      const metadata = { contentType: "image/jpeg" };
      const ref = storage.ref().child(`kit-image/${file.name}`);
      return ref.put(file, metadata).then(() => ref.getDownloadURL());
    });

    Promise.all(promises)
      .then((fileDownloadUrls) => {
        database
          .ref(`ui-collections`)
          .push({
            date: data.date,
            status: data.status,
            productName: data.productName,
            productDescription: data.productDescription,
            industries: data.industries,
            category: data.category,
            benefits: data.benefits,
            images: fileDownloadUrls,
            idrPrice: data.idrPrice,
            idrBuyout: data.idrBuyout,
            usdPrice: data.usdPrice,
            usdBuyout: data.usdBuyout,
            discount: data.discount,
          })
          .then((res) => {
            console.log("this success response", +res);
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

export const getUiKits = () => (dispatch) => {
  dispatch({ type: CHANGE_ISLOADING, value: true });
  const kitsUrl = database.ref(`ui-collections`).orderByChild("status").equalTo("Available");
  return new Promise((resolve, reject) => {
    kitsUrl.on("value", function (snapshot) {
      const data = [];
      // eslint-disable-next-line
      Object.keys(snapshot.val()).map((key) => {
        data.push({
          id: key,
          data: snapshot.val()[key],
        });
      });
      dispatch({ type: GET_KITS, value: data });
      dispatch({ type: CHANGE_ISLOADING, value: false });
      resolve(snapshot.val());
    });
    // dispatch({ type: SKELETON_ON, value: false });
    reject(false);
  });
};

export const getAllUiKits = () => (dispatch) => {
  dispatch({ type: CHANGE_ISLOADING, value: true });
  const kitsUrl = database.ref(`ui-collections`);
  return new Promise((resolve, reject) => {
    kitsUrl.on("value", function (snapshot) {
      const data = [];
      // eslint-disable-next-line
      Object.keys(snapshot.val()).map((key) => {
        data.push({
          id: key,
          data: snapshot.val()[key],
        });
      });
      dispatch({ type: GET_KITS, value: data });
      dispatch({ type: CHANGE_ISLOADING, value: false });
      resolve(snapshot.val());
    });
    reject(false);
  });
};

export const postPaidDownload = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: CHANGE_ISLOADING, value: true });
    database
      .ref(`ui-download`)
      .push({
        date: data.date,
        unique: data.unique,
        thisKit: data.thisKit,
        totalAmountIDR: data.totalAmountIDR,
        totalAmountUSD: data.totalAmountUSD,
        status: data.status,
        on: data.on,
      })
      .then((res) => {
        console.log("this success download", +res);
        dispatch({ type: CHANGE_ISLOADING, value: false });
        resolve(true);
      })
      .catch((err) => {
        console.log("this error download", err);
        dispatch({ type: CHANGE_ISLOADING, value: false });
        reject(false);
      });
  });
};

export const getDownloadKits = () => (dispatch) => {
  dispatch({ type: CHANGE_ISLOADING, value: true });
  const kitsUrl = database.ref(`ui-download`);
  return new Promise((resolve, reject) => {
    kitsUrl.on("value", function (snapshot) {
      const data = [];
      // eslint-disable-next-line
      Object.keys(snapshot.val()).map((key) => {
        data.push({
          id: key,
          data: snapshot.val()[key],
        });
      });
      dispatch({ type: DOWNLOAD_KITS, value: data });
      dispatch({ type: CHANGE_ISLOADING, value: false });
      resolve(snapshot.val());
    });
    reject(false);
  });
};

export const postCustomKit = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: CHANGE_ISLOADING, value: true });
    database
      .ref(`ui-custom`)
      .push({
        date: data.date,
        unique: data.unique,
        thisKit: data.thisKit,
        status: data.status,
      })
      .then(() => {
        dispatch({ type: CHANGE_ISLOADING, value: false });
        resolve(true);
      })
      .catch(() => {
        dispatch({ type: CHANGE_ISLOADING, value: false });
        reject(false);
      });
  });
};

export const getCustomKits = () => (dispatch) => {
  dispatch({ type: CHANGE_ISLOADING, value: true });
  const kitsUrl = database.ref(`ui-custom`);
  return new Promise((resolve, reject) => {
    kitsUrl.on("value", function (snapshot) {
      const data = [];
      // eslint-disable-next-line
      Object.keys(snapshot.val()).map((key) => {
        data.push({
          id: key,
          data: snapshot.val()[key],
        });
      });
      dispatch({ type: CUSTOM_KITS, value: data });
      dispatch({ type: CHANGE_ISLOADING, value: false });
      resolve(snapshot.val());
    });
    reject(false);
  });
};

export const getPopularKits = () => (dispatch) => {
  dispatch({ type: CHANGE_ISLOADING, value: true });
  const kitsUrl = database.ref(`ui-collections`).orderByChild("idrPrice").limitToFirst(4);
  return new Promise((resolve, reject) => {
    kitsUrl.on("value", function (snapshot) {
      const data = [];
      // eslint-disable-next-line
      Object.keys(snapshot.val()).map((key) => {
        data.push({
          id: key,
          data: snapshot.val()[key],
        });
      });
      dispatch({ type: GET_POPULAR_KITS, value: data });
      dispatch({ type: CHANGE_ISLOADING, value: false });
      resolve(snapshot.val());
    });
    reject(false);
  });
};

