// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwIreiYMFqHQsBQulMrhQBcOMkxPCqtyI",
  authDomain: "svelteproyect-6d946.firebaseapp.com",
  projectId: "svelteproyect-6d946",
  storageBucket: "svelteproyect-6d946.appspot.com",
  messagingSenderId: "1064743830148",
  appId: "1:1064743830148:web:3ba33cd6f8ee09a70438d1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)