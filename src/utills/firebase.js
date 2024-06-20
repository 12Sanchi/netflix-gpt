// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPRwqO0_cHK5vwcdawMyPF30blHULEhYw",
  authDomain: "netflixgpt-d58fd.firebaseapp.com",
  projectId: "netflixgpt-d58fd",
  storageBucket: "netflixgpt-d58fd.appspot.com",
  messagingSenderId: "425202142793",
  appId: "1:425202142793:web:faeee5963b47ceef0db998",
  measurementId: "G-LD2BVBNS59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
