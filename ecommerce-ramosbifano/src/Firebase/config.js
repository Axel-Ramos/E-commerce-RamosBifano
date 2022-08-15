// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM6zlwLk6nXoy66irc_5qDQguLp8FSLno",
  authDomain: "karfab-ecommerce.firebaseapp.com",
  projectId: "karfab-ecommerce",
  storageBucket: "karfab-ecommerce.appspot.com",
  messagingSenderId: "827793771828",
  appId: "1:827793771828:web:d7854282ba4d48ccfd2961"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const FirebaseConnections=()=>app;