// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcC_cZw2WWey2-08y7DhW9l19zfdRWeJ8",
  authDomain: "educational-game-cc281.firebaseapp.com",
  projectId: "educational-game-cc281",
  storageBucket: "educational-game-cc281.firebasestorage.app",
  messagingSenderId: "834475450229",
  appId: "1:834475450229:web:4104cb43e7cc0ff4803d3c",
  measurementId: "G-86DDTX1M38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);