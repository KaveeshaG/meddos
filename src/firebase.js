import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB33m1cuaGVVOspVDywMIBlxc0vX7KZvpU",
  authDomain: "meddos.firebaseapp.com",
  projectId: "meddos",
  storageBucket: "meddos.appspot.com",
  messagingSenderId: "405638925863",
  appId: "1:405638925863:web:dc1ec3db3cefd278aa8802"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);