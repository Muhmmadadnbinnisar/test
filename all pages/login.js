// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

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
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const loginForm = document.getElementById('login-form');
const messageDiv = document.getElementById('message');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        
        const userRef = doc(db, "users", user.uid); 
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
            const userType = docSnap.data().userType;

            if (userType === "admin") {
                window.location.href = 'admin-main.html'; 
            } else {
                window.location.href = 'student-portal.html'; 
            }
        } else {
            messageDiv.textContent = "User not found.";
            messageDiv.style.color = "red";
        }
    } catch (error) {
        messageDiv.textContent = "Error: " + error.message;
        messageDiv.style.color = "red";
    }
});
