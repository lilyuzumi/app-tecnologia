import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCNgBNnKsjVzGNDdGIj968RcW_m8rYWdEA",
  authDomain: "app-tecnologia-f74f3.firebaseapp.com",
  projectId: "app-tecnologia-f74f3",
  storageBucket: "app-tecnologia-f74f3.appspot.com",
  messagingSenderId: "694451665369",
  appId: "1:694451665369:web:f0ab89e9643cf30451c1c8",
  measurementId: "G-72TQLXNF1Q"
}; 
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app); 
export const db = getFirestore(app);