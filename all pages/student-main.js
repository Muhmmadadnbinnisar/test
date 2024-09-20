// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAspH3Hz4Cm7mIOD8xMwCaC1tMZdUUi9k4",
    authDomain: "heckathon1.firebaseapp.com",
    projectId: "heckathon1",
    storageBucket: "heckathon1.appspot.com",
    messagingSenderId: "207975851842",
    appId: "1:207975851842:web:dae6a4c38692c8fc4a0adb",
    measurementId: "G-MHBDD4M9ZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('view-results').addEventListener('click', () => {
    window.location.href = 'result.html'; 
});

document.getElementById('edit-profile').addEventListener('click', () => {
    window.location.href = 'edit-profile.html'; 
});

document.getElementById('logout').addEventListener('click', async () => {
    try {
        await signOut(auth);
        window.location.href = 'login.html'; 
    } catch (error) {
        document.getElementById('message').textContent = "Error logging out: " + error.message;
    }
});
