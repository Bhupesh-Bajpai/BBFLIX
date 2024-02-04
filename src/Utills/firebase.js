// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_6ZSIZvZiPOig0VAzLntEx7M0SJa-UYc",
  authDomain: "bbflix-52769.firebaseapp.com",
  projectId: "bbflix-52769",
  storageBucket: "bbflix-52769.appspot.com",
  messagingSenderId: "62304327868",
  appId: "1:62304327868:web:4ec05f835e05d7244618b9",
  measurementId: "G-BZRLS1VQSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);