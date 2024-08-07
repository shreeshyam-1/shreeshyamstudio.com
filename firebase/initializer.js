// "use client"
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// configration data is stored on the cxi@miet.ac.in firebase
const firebaseConfig = {
    apiKey: "A0IzaSyC_Khhv9TRAdC_Gp_K6JEwDiNpGEIVLZbI",
    authDomain: "singhalsanitary-d76ba.firebaseapp.com",
    projectId: "singhalsanitary-d76ba",
    storageBucket: "singhalsanitary-d76ba.appspot.com",
    messagingSenderId: "472003655534",
    appId: "1:472003655534:web:bbbd4a43056ceb024df37f",
    measurementId: "G-C5697B4P5R"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db , storage}