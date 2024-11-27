// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD44mmtNEuExdgxMAKlEoBLdvdqvH3kGBM",
  authDomain: "controle-de-acesso-app.firebaseapp.com",
  projectId: "controle-de-acesso-app",
  storageBucket: "controle-de-acesso-app.appspot.com",
  messagingSenderId: "166340240585",
  appId: "1:166340240585:web:ff4c173bc0b9ea1371d918",
  measurementId: "G-P4MFX1K2QM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
