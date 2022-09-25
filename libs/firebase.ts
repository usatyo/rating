// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4dU-lRQJ_Yi2BxfrhMzgvsDQ1pYjQzuo",
  authDomain: "igo-rating.firebaseapp.com",
  projectId: "igo-rating",
  storageBucket: "igo-rating.appspot.com",
  messagingSenderId: "747823676927",
  appId: "1:747823676927:web:ec1e98ea4398b6e55dbbca",
  measurementId: "G-PTVKJ5Z27Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);