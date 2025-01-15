// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtncGAZatbsDnAhJTmgURm8xmdghZn7n8",
  authDomain: "write-node-51253.firebaseapp.com",
  projectId: "write-node-51253",
  storageBucket: "write-node-51253.firebasestorage.app",
  messagingSenderId: "454075164695",
  appId: "1:454075164695:web:b511b285b084d695419452",
  measurementId: "G-Y0NHHRWNQ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const postsCollectionRef = collection(db, "posts")