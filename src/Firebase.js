// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfS3hcQFYBwr8QbDIG67NENyjoF8xCvP8",
  authDomain: "smit-portal.firebaseapp.com",
  projectId: "smit-portal",
  storageBucket: "smit-portal.appspot.com",
  messagingSenderId: "603765723379",
  appId: "1:603765723379:web:ad425de545bf715acae786",
  measurementId: "G-Q4VVEXK7BX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()
export const db=getFirestore(app);
export const storage = getStorage(app);


