import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArczqINLks0NldjWNjIPudVDFx-c_eaiQ",
  authDomain: "reactlinks-131b8.firebaseapp.com",
  projectId: "reactlinks-131b8",
  storageBucket: "reactlinks-131b8.firebasestorage.app",
  messagingSenderId: "719870995457",
  appId: "1:719870995457:web:bc6c3da5388e5c23632400",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
