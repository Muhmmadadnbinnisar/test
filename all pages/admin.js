// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
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
const analytics = getAnalytics(app);
const auth = getAuth(app);


function navigateToAddStudents() {
    window.location.href = 'add-students.html';
}


function navigateToUploadMarks() {
    window.location.href = 'upload-marks.html';
}


function logout() {
    signOut(auth).then(() => {
        window.location.href = 'login.html';
    }).catch((error) => {
        console.error("Error logging out:", error);
    });
}
document.getElementById('add-students-btn').addEventListener('click', navigateToAddStudents);
document.getElementById('upload-marks-btn').addEventListener('click', navigateToUploadMarks);
document.getElementById('logout-btn').addEventListener('click', logout);
