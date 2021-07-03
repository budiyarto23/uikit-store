import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

  const firebaseConfig = {
    apiKey: "AIzaSyAuS0zjCkGBFrmCs7XVfMleIAb0GOxgUBA",
    authDomain: "portfolio-project-e2099.firebaseapp.com",
    databaseURL: "https://portfolio-project-e2099-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "portfolio-project-e2099",
    storageBucket: "portfolio-project-e2099.appspot.com",
    // storageBucket: "gs://portfolio-project-e2099.appspot.com",
    messagingSenderId: "816873428080",
    appId: "1:816873428080:web:200b3bf2da777ff12250b5"
  };
  
  firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
export const storage = firebase.storage();

export default firebase;
  