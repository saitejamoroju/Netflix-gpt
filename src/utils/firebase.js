// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu_4nBmtQ1XvAiwJQpplMUgrxEdV1L2IQ",
  authDomain: "netflix-gpt-9a8ef.firebaseapp.com",
  projectId: "netflix-gpt-9a8ef",
  storageBucket: "netflix-gpt-9a8ef.firebasestorage.app",
  messagingSenderId: "802651700782",
  appId: "1:802651700782:web:84fb4bd95015d13b4229bf",
  measurementId: "G-FDJ76R6CCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()
// npm install -g firebase-tools