import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "synapse-c1467.firebaseapp.com",
  projectId: "synapse-c1467",
  storageBucket: "synapse-c1467.appspot.com",
  messagingSenderId: "810784434247",
  appId: "1:810784434247:web:51e586767275d9596b6962",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Firebase Auth instance
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();
