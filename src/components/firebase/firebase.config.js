// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFv5dNE3cI2KV-3k13SbEeyNfh7AL3t-w",
  authDomain: "rmw-lookup.firebaseapp.com",
  projectId: "rmw-lookup",
  storageBucket: "rmw-lookup.appspot.com",
  messagingSenderId: "140397798922",
  appId: "1:140397798922:web:9d30679aaabc6b978aa1f3",
  measurementId: "G-R271RTC044"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);