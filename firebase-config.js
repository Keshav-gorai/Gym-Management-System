// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";

// Your Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBWL5pjTH6eiGsRBFEGEKtGPJNnRnB4xTw",
    authDomain: "gym-management-system-61c0f.firebaseapp.com",
    databaseURL: "https://gym-management-system-61c0f-default-rtdb.firebaseio.com",
    projectId: "gym-management-system-61c0f",
    storageBucket: "gym-management-system-61c0f.appspot.com",
    messagingSenderId: "170551154690",
    appId: "1:170551154690:web:db1317886101caeed32f1b"
    // measurementId: "G-8XHQQR6K1N"
};

// firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Export the auth and database instances
export { auth, database };
