import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiTWh5RP0mjyiEm5QsMjg5jMg6N5Nw6OM",
  authDomain: "bhandaranearme.firebaseapp.com",
  projectId: "bhandaranearme",
  storageBucket: "bhandaranearme.appspot.com",
  messagingSenderId: "324491100532",
  appId: "1:324491100532:web:393bc8c12da9d536cbec21",
  measurementId: "G-1GWQBWFDWM",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
