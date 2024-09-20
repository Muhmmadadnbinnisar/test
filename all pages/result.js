// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";

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
const db = getFirestore(app);

const resultForm = document.getElementById('result-form');
const resultMessage = document.getElementById('result-message');
const resultDisplay = document.getElementById('result-display');

resultForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const cnic = document.getElementById('cnic').value;

    // Fetch results based on CNIC
    const q = query(collection(db, "students"), where("cnic", "==", cnic));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
        resultMessage.textContent = "No results found for the provided CNIC.";
        resultDisplay.innerHTML = "";
    } else {
        let results = "";
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            results += `<p>Name: ${data.firstName} ${data.lastName}</p>`;
            results += `<p>Marks: ${data.marks}</p>`;
            results += `<p>Course: ${data.course}</p>`;
            results += `<p>Grade: ${data.grade}</p>`;
        });
        resultDisplay.innerHTML = results;
        resultMessage.textContent = "";
    }
});
