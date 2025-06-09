
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl9TqIdOAcF3oX-T7fPr-P_zaaTRwNU-U",
  authDomain: "prepwise-d6760.firebaseapp.com",
  projectId: "prepwise-d6760",
  storageBucket: "prepwise-d6760.firebasestorage.app",
  messagingSenderId: "976376945029",
  appId: "1:976376945029:web:5b24e3e2c8250a120f0cec",
  measurementId: "G-H0NFP5P03Z"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);