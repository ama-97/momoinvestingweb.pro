// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Configuration de ton projet Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA-l8gt0GX8usilrR5afpiAHIruSQhrRR4",
  authDomain: "momoinvesting-e85dc.firebaseapp.com",
  projectId: "momoinvesting-e85dc",
  storageBucket: "momoinvesting-e85dc.appspot.com",
  messagingSenderId: "125503752102",
  appId: "1:125503752102:web:a5ee7dd0155e85fbe93167",
  databaseURL: "https://momoinvesting-e85dc-default-rtdb.firebaseio.com" // ← ajoute cette ligne si tu veux utiliser la Realtime Database
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };
