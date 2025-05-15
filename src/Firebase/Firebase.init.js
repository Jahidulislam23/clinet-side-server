 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTUIl7hf6G9M9EaMa19Jtuvhxeq6KuKbQ",
  authDomain: "coffee-store-app-4f8b5.firebaseapp.com",
  projectId: "coffee-store-app-4f8b5",
  storageBucket: "coffee-store-app-4f8b5.firebasestorage.app",
  messagingSenderId: "767852974799",
  appId: "1:767852974799:web:67d5e38925b119cb99ddba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);