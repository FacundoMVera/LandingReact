
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7Q-ACujsZ35lH0cPkrf3wXqb1bXKF_JA",
  authDomain: "asdf-74932.firebaseapp.com",
  projectId: "asdf-74932",
  storageBucket: "asdf-74932.appspot.com",
  messagingSenderId: "656138241786",
  appId: "1:656138241786:web:bd31bf6c92ff3b247a2b43",
  measurementId: "G-SJQSRH1FEP"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const db = getFirestore(app); 

const analytics = getAnalytics(app);

export { app, auth, db }; 
