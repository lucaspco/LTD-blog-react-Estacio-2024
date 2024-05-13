// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN7u-DGmBFDBxLD3NOI5rsSkcmbT_KYB0",
  authDomain: "blogculinaria-9e5f5.firebaseapp.com",
  projectId: "blogculinaria-9e5f5",
  storageBucket: "blogculinaria-9e5f5.appspot.com",
  messagingSenderId: "757212650535",
  appId: "1:757212650535:web:26c1aefeeac2aa0093c202",
  measurementId: "G-CPDXCBM7PW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Banco de dados do firebase
const db = getFirestore (app);
export {db};