import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwU2QEVvt1EQaynJkmWHWnwgZjoPrOqBo",
  authDomain: "chatbook-1a50e.firebaseapp.com",
  databaseURL: "https://chatbook-1a50e-default-rtdb.firebaseio.com",
  projectId: "chatbook-1a50e",
  storageBucket: "chatbook-1a50e.appspot.com",
  messagingSenderId: "703517062082",
  appId: "1:703517062082:web:9583bd124337a503411c5b",
};


const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app)
const db = getDatabase(app)
const auth = getAuth(app)

export { db, fireStore, auth };