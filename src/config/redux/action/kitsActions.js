import { database, storage } from "../../firebase";
import {
  CHANGE_ISLOADING,
  GET_KITS,
  MODAL_OPEN
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

// export const getUiKits = (userId) => (dispatch) => {
//   const kitsUrl = database.ref(`ui-collections/${userId}`);
//   return new Promise((resolve, reject) => {
//     kitsUrl.on('value', function(snapshot) {
//       const data =[];
//       // eslint-disable-next-line
//       Object.keys(snapshot.val()).map((key => {
//         data.push({
//           id: key,
//           data: snapshot.val()[key]
//         })
//       }))
//       dispatch({ type: GET_KITS, value: data });
//       console.log("isi data ", data)
//       resolve(snapshot.val())
//     })
//     reject(false);
//   })
// }

export const getUiKits = () => (dispatch) => {
  dispatch({ type: CHANGE_ISLOADING, value: true });
  const kitsUrl = database.ref(`ui-collections`);
  return new Promise((resolve, reject) => {
    kitsUrl.on('value', function(snapshot) {
      const data =[];
      // eslint-disable-next-line
      Object.keys(snapshot.val()).map((key => {
        data.push({
          id: key,
          data: snapshot.val()[key]
        })
      }))
      dispatch({ type: GET_KITS, value: data });
      dispatch({ type: CHANGE_ISLOADING, value: false });
      resolve(snapshot.val())
    })
    // dispatch({ type: SKELETON_ON, value: false });
    reject(false);
  })
}