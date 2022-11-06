// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXQn4tQx2-s-4CbAN1agc6ILDJbRpF_e4",
  authDomain: "pamc-6bb61.firebaseapp.com",
  databaseURL: "https://pamc-6bb61-default-rtdb.firebaseio.com",
  projectId: "pamc-6bb61",
  storageBucket: "pamc-6bb61.appspot.com",
  messagingSenderId: "394483800154",
  appId: "1:394483800154:web:710d485a606d36f3aba063",
  measurementId: "G-V2437NEMLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore= getFirestore(app);