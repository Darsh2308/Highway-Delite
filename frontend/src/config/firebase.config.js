// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import the auth service
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYYGKXT4kRUUj3Mn2qhcobnTmaZhziBkI",
  authDomain: "highway-delite-97cad.firebaseapp.com",
  projectId: "highway-delite-97cad",
  storageBucket: "highway-delite-97cad.appspot.com",
  messagingSenderId: "102129680354",
  appId: "1:102129680354:web:9807d8eb0e97ffb66b83bb",
  measurementId: "G-Q5Z8P6FYV1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize the auth service

// Export Firebase services
export { auth };
