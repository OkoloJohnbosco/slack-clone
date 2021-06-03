import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

firebase.initializeApp({
  apiKey: "AIzaSyDbiPwUr4VrSAej2UWpSCi5DXlFENImpfQ",
  authDomain: "slack-clone-7eaa5.firebaseapp.com",
  projectId: "slack-clone-7eaa5",
  storageBucket: "slack-clone-7eaa5.appspot.com",
  messagingSenderId: "791231105099",
  appId: "1:791231105099:web:13fc3e8a009b733dd2a5ce",
  measurementId: "G-VKRWMFD54F",
});

const auth = firebase.auth();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const serverTime = firebase.firestore.FieldValue.serverTimestamp;

export { auth, provider, serverTime };
export default db;
// {
//     "hosting": {
//       "site": "slack-clone-d1385",
//       "public": "public",
//       ...
//     }
//   }
