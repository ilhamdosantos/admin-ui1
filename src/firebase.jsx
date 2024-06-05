// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-1ad73.firebaseapp.com",
  projectId: "store-tutorial-1ad73",
  storageBucket: "store-tutorial-1ad73.appspot.com",
  messagingSenderId: "1029486381588",
  appId: "1:1029486381588:web:598ecde7c268c3887df501",
  measurementId: "G-9P3KM2QVWX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();