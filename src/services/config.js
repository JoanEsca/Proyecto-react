import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDYUI9PVLAWVKXsveA0pFtYVFND1J19fdU",
  authDomain: "joan-esca.firebaseapp.com",
  projectId: "joan-esca",
  storageBucket: "joan-esca.appspot.com",
  messagingSenderId: "397876739064",
  appId: "1:397876739064:web:4ce9d87e28e9db0607740d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);