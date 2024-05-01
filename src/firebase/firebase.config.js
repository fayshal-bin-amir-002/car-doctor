// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClNeQb5zjKXklKowJx65AHGBAM70SFNe8",
  authDomain: "car-doctor-bb17a.firebaseapp.com",
  projectId: "car-doctor-bb17a",
  storageBucket: "car-doctor-bb17a.appspot.com",
  messagingSenderId: "483741336526",
  appId: "1:483741336526:web:7fa11a12333c7b6460219f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;