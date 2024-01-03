import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";  
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQ5BHeD-ghSr782stoHAExuiJ53qag2Bo",
  authDomain: "chat-app-ade51.firebaseapp.com",
  projectId: "chat-app-ade51",
  storageBucket: "chat-app-ade51.appspot.com",
  messagingSenderId: "840157977101",
  appId: "1:840157977101:web:031aa357c2c9ac36a25344"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()

// Create a root reference
export const storage = getStorage();

// DataBase 
export const db = getFirestore()