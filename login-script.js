// Import Firebase modules
import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js";

// Get the login form element
const loginForm = document.getElementById('login-form');

// Add event listener for form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Get user input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Sign in the user using Firebase Authentication
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            console.log(user);
            

            // Redirect to dashboard after successful login
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            // Handle Firebase sign-in errors
            console.error("Error during login:", error);
            alert("Error: " + error.message);
        });
});
