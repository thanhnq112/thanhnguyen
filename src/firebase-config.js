import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA9zS2MlOUTrXtRd3OWJ4AdENeX23Lmf0g",
    authDomain: "portfolio-app-18dfb.firebaseapp.com",
    projectId: "portfolio-app-18dfb",
    storageBucket: "portfolio-app-18dfb.appspot.com",
    messagingSenderId: "835863435755",
    appId: "1:835863435755:web:dce228530f11f51783a1ae",
    measurementId: "G-24R6V1FXVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);