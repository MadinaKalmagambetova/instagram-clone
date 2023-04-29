import firebase from "./firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCDFE9KDsZlPAYETlfaP28z7cilMj5FDtU",
  authDomain: "instagramclone-16332.firebaseapp.com",
  databaseURL: "https://instagramclone-16332-default-rtdb.firebaseio.com",
  projectId: "instagramclone-16332",
  storageBucket: "instagramclone-16332.appspot.com",
  messagingSenderId: "830663893914",
  appId: "1:830663893914:web:10b54fe82a034c52b79023"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage};