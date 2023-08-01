// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXEsN2mL7dIJ7ejX8AI2KTa2eE7tGzDBc",
  authDomain: "otpauth-5f8e7.firebaseapp.com",
  projectId: "otpauth-5f8e7",
  storageBucket: "otpauth-5f8e7.appspot.com",
  messagingSenderId: "196252197209",
  appId: "1:196252197209:web:be16bb5fc57ad331c62c48",
  measurementId: "G-PLT5L49F7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);