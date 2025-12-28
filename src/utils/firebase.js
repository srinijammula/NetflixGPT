// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCscO758BlMiz-VX_-os0JaCTlsGuHRtrA",
  authDomain: "netflixgpt-fba36.firebaseapp.com",
  projectId: "netflixgpt-fba36",
  storageBucket: "netflixgpt-fba36.firebasestorage.app",
  messagingSenderId: "882291815544",
  appId: "1:882291815544:web:f24bdad4cb89137da0a98d",
  measurementId: "G-W2GMB3GN03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);