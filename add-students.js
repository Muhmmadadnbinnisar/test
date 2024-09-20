import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import {  getFirestore, collection, addDoc  } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAspH3Hz4Cm7mIOD8xMwCaC1tMZdUUi9k4",
    authDomain: "heckathon1.firebaseapp.com",
    projectId: "heckathon1",
    storageBucket: "heckathon1.appspot.com",
    messagingSenderId: "207975851842",
    appId: "1:207975851842:web:dae6a4c38692c8fc4a0adb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const addStudentForm = document.getElementById('add-student-form');

addStudentForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cnic = document.getElementById('cnic').value;
    const userType = document.getElementById('userType').value; 

    try {
        
        const docRef = await addDoc(collection(db, 'students'), {
            firstName,
            lastName,
            email,
            password, 
            cnic,
            userType
        });

        
        document.getElementById('message').textContent = `Student added with ID: ${docRef.id}`;
        addStudentForm.reset(); 

    } catch (error) {
        console.error("Error adding student: ", error);
        document.getElementById('message').textContent = "Error adding student.";
    }
});
