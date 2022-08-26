import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDM6zlwLk6nXoy66irc_5qDQguLp8FSLno",
  authDomain: "karfab-ecommerce.firebaseapp.com",
  projectId: "karfab-ecommerce",
  storageBucket: "karfab-ecommerce.appspot.com",
  messagingSenderId: "827793771828",
  appId: "1:827793771828:web:d7854282ba4d48ccfd2961"
};

const app = initializeApp(firebaseConfig);

export const FirebaseConnections=()=>app;