import Rebase from "re-base";
import * as firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBKyJ5I7l6Msx8ewtjcicOevSS5_ainglk",
  authDomain: "catch-of-the-day-63746.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-63746.firebaseio.com",
  projectId: "catch-of-the-day-63746",
  storageBucket: "catch-of-the-day-63746.appspot.com",
  messagingSenderId: "278934596837",
  appId: "1:278934596837:web:c9c1f5bc3def8a79"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
