// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD09hODvtiu1fYHsuGKuTineQjHsipNBd0",
  authDomain: "engineering-hub-8224f.firebaseapp.com",
  projectId: "engineering-hub-8224f",
  storageBucket: "engineering-hub-8224f.appspot.com",
  messagingSenderId: "444803265525",
  appId: "1:444803265525:web:ec23d4dfdb1c680ec6a6bc",
  measurementId: "G-0HGRNGSKM6",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();

const storage = getStorage();
const analytics = getAnalytics(app);

export { app, db, storage, analytics };
