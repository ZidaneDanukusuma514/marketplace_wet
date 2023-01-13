// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsVuilaDRjt2tk8gUBJTTiu9cPAs_HEV0",
  authDomain: "marketplace-a60a7.firebaseapp.com",
  projectId: "marketplace-a60a7",
  storageBucket: "marketplace-a60a7.appspot.com",
  messagingSenderId: "927632721674",
  appId: "1:927632721674:web:26cae03bcc7d2841bb9cf3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const CollectionDb = collection(db, "items");
