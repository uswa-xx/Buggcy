// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-app-a2d03.firebaseapp.com",
  projectId: "auth-app-a2d03",
  storageBucket: "auth-app-a2d03.appspot.com",
  messagingSenderId: "190966914834",
  appId: "1:190966914834:web:712dcdf250ed9d14089dcb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);