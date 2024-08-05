// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "netflix-gpt-d4a69.firebaseapp.com",
  projectId: "netflix-gpt-d4a69",
  storageBucket: "netflix-gpt-d4a69.appspot.com",
  messagingSenderId: "658282483093",
  appId: "1:658282483093:web:825fada2cfbdf989c57a9c",
  measurementId: "G-6F51MS4DVD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();