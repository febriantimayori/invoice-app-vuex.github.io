import firebase from "firebase/app";
// import firebase from 'firebase/compat/app';   //pakai ini soalnya firebase v9
import "firebase/firestore";

var firebaseConfig = {
 apiKey: "AIzaSyCq5dyWsXnJnu8HWD1vT8QuCyYHWw7LVjQ",
  authDomain: "invoicevuex.firebaseapp.com",
  projectId: "invoicevuex",
  storageBucket: "invoicevuex.appspot.com",
  messagingSenderId: "257446835822",
  appId: "1:257446835822:web:9795524f976d5e32a9187f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();