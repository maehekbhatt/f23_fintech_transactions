// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy0AmT00WLYbte-yWSoDclEY_AIXlT9zE",
  authDomain: "ut-safe-trade.firebaseapp.com",
  projectId: "ut-safe-trade",
  storageBucket: "ut-safe-trade.appspot.com",
  messagingSenderId: "591707717891",
  appId: "1:591707717891:web:002468e557040a58e42936",
  measurementId: "G-46H2XEDL67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = firebase.firestore();

export default function Firebase() {

};