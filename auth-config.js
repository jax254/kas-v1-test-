// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxE2XHEz-wUu0wDDpZdOr87-IXmZ-ElA0",
  authDomain: "kashub-3d8e4.firebaseapp.com",
  projectId: "kashub-3d8e4",
  storageBucket: "kashub-3d8e4.firebasestorage.app",
  messagingSenderId: "25554859908",
  appId: "1:25554859908:web:41eaee8bbfda8126604fd1",
  measurementId: "G-R0SVZB0VTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);