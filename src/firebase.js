import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";  
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD_SNVgVI9jlqUj9jlujvGRjydShe1TZiA",
  authDomain: "chat-9e5ae.firebaseapp.com",
  projectId: "chat-9e5ae",
  storageBucket: "chat-9e5ae.appspot.com",
  messagingSenderId: "623754685774",
  appId: "1:623754685774:web:dbc59b2589b70192fd021f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()

// Create a root reference
export const storage = getStorage();

// DataBase 
export const db = getFirestore()