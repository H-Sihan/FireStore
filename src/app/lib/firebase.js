// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

// step 1: npm install firestore
// step 2: import getFirestore from firebase/firestore.

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaSpUwqvpaiz8FrDTf4pcQCjgcjtFSwas",
  authDomain: "week7-lec.firebaseapp.com",
  projectId: "week7-lec",
  storageBucket: "week7-lec.appspot.com",
  messagingSenderId: "780911294386",
  appId: "1:780911294386:web:a413c3e59f0b3dfa53d6ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app); // Initialize Firestore

export { auth, provider, signInWithPopup, db };