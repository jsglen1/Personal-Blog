// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE ,
  authDomain: "nextblog-dfe5d.firebaseapp.com",
  projectId: "nextblog-dfe5d",
  storageBucket: "nextblog-dfe5d.appspot.com",
  messagingSenderId: "832848550667",
  appId: "1:832848550667:web:62f1303ca8112d49d1200e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);