// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "cdn-hive.firebaseapp.com",
  projectId: "cdn-hive",
  storageBucket: "cdn-hive.appspot.com",
  messagingSenderId: "940559331358",
  appId: "1:940559331358:web:55983955da6ff30b16be0f",
};

// Initialize Firebase
initializeApp(firebaseConfig);
