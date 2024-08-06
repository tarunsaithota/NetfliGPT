// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnWaLs3RKGKsWn1QKv2MdJPOyTNWSX6CU",
  authDomain: "moviesgpt-651ca.firebaseapp.com",
  projectId: "moviesgpt-651ca",
  storageBucket: "moviesgpt-651ca.appspot.com",
  messagingSenderId: "1078831035021",
  appId: "1:1078831035021:web:caa45b1370e9cd477ba8c4",
  measurementId: "G-6F51MS4DVD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();