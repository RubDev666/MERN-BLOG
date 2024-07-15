// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "blog-mern-fd9bc.firebaseapp.com",
    projectId: "blog-mern-fd9bc",
    storageBucket: "blog-mern-fd9bc.appspot.com",
    messagingSenderId: "90679313246",
    appId: "1:90679313246:web:9060cbe9725df7842385cf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
