// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAacJLsD3Y4sDCS1o5GAM6Wk96NNJEf0oU",
  authDomain: "sports-center-219b9.firebaseapp.com",
  projectId: "sports-center-219b9",
  storageBucket: "sports-center-219b9.appspot.com",
  messagingSenderId: "13506621579",
  appId: "1:13506621579:web:a69f9c921650f1604ea48e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;