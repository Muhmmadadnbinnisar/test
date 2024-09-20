import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getFirestore, doc, updateDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js"; 

// Firebase configuration
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
const auth = getAuth();


onAuthStateChanged(auth, (user) => {
    if (user) {
        const userId = user.uid; 

       
        const editProfileForm = document.getElementById('edit-profile-form');
        editProfileForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const cnic = document.getElementById('cnic').value;

         
            const userRef = doc(db, "students", userId);

            try {
                
                const docSnap = await getDoc(userRef);

                if (docSnap.exists()) {
                    
                    await updateDoc(userRef, {
                        firstName,
                        lastName,
                        cnic
                    });
                    document.getElementById('profile-message').textContent = "Profile updated successfully!";
                } else {
                    document.getElementById('profile-message').textContent = "Profile not found.";
                }
            } catch (error) {
                document.getElementById('profile-message').textContent = `Error updating profile: ${error.message}`;
                console.error("Error details:", error);
            }
        });
    } else {
        document.getElementById('profile-message').textContent = "No user logged in.";
    }
});
