// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKylsW_-WWHuk1bB26PHhVQRLes_urLc4",
  authDomain: "m-r-s-10flrs23.firebaseapp.com",
  projectId: "m-r-s-10flrs23",
  storageBucket: "m-r-s-10flrs23.appspot.com",
  messagingSenderId: "1053801671005",
  appId: "1:1053801671005:web:171338e8e2cddf5a9920b4",
  measurementId: "G-2FGENH18JQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
