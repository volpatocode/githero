import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9r7rmczdb4AW4NOTi708CSA1iO-YhjTM",
  authDomain: "githero-d0fbb.firebaseapp.com",
  projectId: "githero-d0fbb",
  storageBucket: "githero-d0fbb.appspot.com",
  messagingSenderId: "549170459036",
  appId: "1:549170459036:web:748dce4880431d5b095859",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage();
