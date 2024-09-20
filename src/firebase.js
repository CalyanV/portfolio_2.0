// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-rwLVJZb_r4uKpfvp7KLf8Zm5ItQPl24",
  authDomain: "portfolio-2-91d8b.firebaseapp.com",
  projectId: "portfolio-2-91d8b",
  storageBucket: "portfolio-2-91d8b.appspot.com",
  messagingSenderId: "254591130331",
  appId: "1:254591130331:web:bb8ea880285e601315cafe",
  measurementId: "G-VP4B66QNXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);