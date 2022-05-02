// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx-tXCPan6CpDJn0PVrUdeHclTs1wsaVU",
  authDomain: "assignment11-79fa9.firebaseapp.com",
  projectId: "assignment11-79fa9",
  storageBucket: "assignment11-79fa9.appspot.com",
  messagingSenderId: "360724482355",
  appId: "1:360724482355:web:fecc496e4f0c27cacad646"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;