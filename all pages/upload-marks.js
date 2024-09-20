import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getFirestore, collection, addDoc  } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
console.log("Firestore initialized:", db);

const uploadMarksForm = document.getElementById('upload-marks-form');
uploadMarksForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const course = document.getElementById('course').value;
    const studentId = document.getElementById('studentId').value;
    const marks = document.getElementById('marks').value;
    const totalMarks = document.getElementById('totalMarks').value;
    const grade = document.getElementById('grade').value;

    try {
        await addDoc(collection(db, 'marks'), {
            course,
            studentId,
            marks,
            totalMarks,
            grade,
        });
        document.getElementById('marks-message').textContent = "marks uploaded successfully!.";
        uploadMarksForm.reset();
    } catch (error) {
        document.getElementById('marks-message').textContent = "error uploading marks.";
        console.error("error uploading marks: ", error);
    }
});