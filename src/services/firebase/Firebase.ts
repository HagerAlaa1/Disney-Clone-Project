import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDJx78KxuNQT55XtWbOtnjsr2GzNdFRBDs",
  authDomain: "disney-clone-project-baf44.firebaseapp.com",
  projectId: "disney-clone-project-baf44",
  storageBucket: "disney-clone-project-baf44.firebasestorage.app",
  messagingSenderId: "53682654944",
  appId: "1:53682654944:web:514e4a24371352cff3ca85",
  measurementId: "G-LTJ2NNYQ1T",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp)