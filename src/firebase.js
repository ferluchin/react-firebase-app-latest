// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDQyDOQYWx8IykMZPibFF-aLnAKa92ANr0",
    authDomain: "react-fb-auth-a13e5.firebaseapp.com",
    projectId: "react-fb-auth-a13e5",
    storageBucket: "react-fb-auth-a13e5.appspot.com",
    messagingSenderId: "798778177347",
    appId: "1:798778177347:web:11de35fbfca73599c861f6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)