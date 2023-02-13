// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHOmngMexhmMRZ1gMNk8cE9eR22gj8dfk",
  authDomain: "quantovelemeuveiculo.firebaseapp.com",
  projectId: "quantovelemeuveiculo",
  storageBucket: "quantovelemeuveiculo.appspot.com",
  messagingSenderId: "973971011819",
  appId: "1:973971011819:web:221663c349a4624984a6ae",
  measurementId: "G-1KL71WMPRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);