// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLp1M8Q320E4KI6V2S5-HlzhOE1dCiT7A",
  authDomain: "netflix-clone-4d8d0.firebaseapp.com",
  projectId: "netflix-clone-4d8d0",
  storageBucket: "netflix-clone-4d8d0.appspot.com",
  messagingSenderId: "533774882376",
  appId: "1:533774882376:web:9732e5ffacfbf752476a7d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
