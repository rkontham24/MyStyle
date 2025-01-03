// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4fOg_8M0eCDQRua8yb9_p8mHN2_wBcPs",
  authDomain: "mystyle-59687.firebaseapp.com",
  projectId: "mystyle-59687",
  storageBucket: "mystyle-59687.firebasestorage.app",
  messagingSenderId: "837715294289",
  appId: "1:837715294289:web:fa40426e5bb751eabe6070",
  measurementId: "G-HM49D5YXTX"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig); // Initializes app with API info
export const FIREBASE_AUTH = getAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
})