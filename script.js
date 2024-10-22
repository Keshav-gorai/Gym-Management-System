// Import Firebase modules
import { auth, database } from './firebase-config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-auth.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";

// Get the sign-up form element
const signupForm = document.getElementById('signup-form');

// Add event listener for form submission
signupForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Get user input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Create user in Firebase Authentication
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            // Store additional user details in Firebase Realtime Database
            set(ref(database, 'users/' + user.uid), {
                name: name,
                email: email,
                uid: user.uid
            })
            .then(() => {
                // Data saved successfully
                alert("User registered successfully!");

                // Redirect to login page after successful registration
                window.location.href = "index.html";
            })
            .catch((error) => {
                // Handle errors when saving user data to database
                console.error("Error saving user data to the database:", error);
                alert("Error: " + error.message);
            });
        })
        .catch((error) => {
            // Handle Firebase sign-up errors
            console.error("Error during registration:", error);
            alert("Error: " + error.message);
        });
});
