import firebase from "firebase";

const firebaseApp =firebase.initializeApp({
  apiKey: "AIzaSyBF6sMiA5Qrvg7so1Z9z37rOYq7NcvqlvM",
  authDomain: "facebook-messenger-f2fef.firebaseapp.com",
  databaseURL: "https://facebook-messenger-f2fef.firebaseio.com",
  projectId: "facebook-messenger-f2fef",
  storageBucket: "facebook-messenger-f2fef.appspot.com",
  messagingSenderId: "524101676363",
  appId: "1:524101676363:web:483bef29e2dfe8f5084cce",
  measurementId: "G-H71Z8T8J1W"
});

const db = firebaseApp.firestore();

export default db;