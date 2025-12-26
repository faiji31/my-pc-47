// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6fJg_-G_atd3yxCLAutqQuRV3NHqVgWc",
  authDomain: "my-pc-47.firebaseapp.com",
  projectId: "my-pc-47",
  storageBucket: "my-pc-47.firebasestorage.app",
  messagingSenderId: "965482368928",
  appId: "1:965482368928:web:8802a799f690b488e39ec5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);