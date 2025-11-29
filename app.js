// Firebase SDK imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, collection, addDoc, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBqCeV6BgP9St5IjvfmQRTkXSHt1wP0Azk",
  authDomain: "chat-app-8c421.firebaseapp.com",
  projectId: "chat-app-8c421",
  storageBucket: "chat-app-8c421.appspot.com", // Fixed domain name
  messagingSenderId: "246098888413",
  appId: "1:246098888413:web:277b6cf7d9b1f89c3b3d34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// DOM Elements
const email = document.getElementById("email");
const password = document.getElementById("password");
const messageInput = document.getElementById("messageInput");
const messagesDiv = document.getElementById("messages");

// Register
window.register = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => alert("✅ Registered successfully!"))
    .catch(err => alert(" " + err.message));
};

// Login
window.login = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => alert("✅ Logged in!"))
    .catch(err => alert(" " + err.message));
};

// Logout
window.logout = () => {
  signOut(auth);
};

// Send Message
window.sendMessage = async () => {
  if (messageInput.value.trim() !== "") {
    await addDoc(collection(db, "messages"), {
      text: messageInput.value,
      email: auth.currentUser.email,
      timestamp: serverTimestamp()
    });
    messageInput.value = "";
  }
};

// Listen to new messages
function listenToMessages() {
  onSnapshot(collection(db, "messages"), snapshot => {
    messagesDiv.innerHTML = "";
    snapshot.forEach(doc => {
      const data = doc.data();
      messagesDiv.innerHTML += `<p><b>${data.email}:</b> ${data.text}</p>`;
    });
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  });
}

// Auth State Observer
onAuthStateChanged(auth, user => {
  if (user) {
    document.getElementById("auth-section").style.display = "none";
    document.getElementById("chat-section").style.display = "block";
    listenToMessages();
  } else {
    document.getElementById("auth-section").style.display = "block";
    document.getElementById("chat-section").style.display = "none";
  }
});

// Attach event listeners
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("registerBtn").addEventListener("click", window.register);
  document.getElementById("loginBtn").addEventListener("click", window.login);
  document.getElementById("logoutBtn").addEventListener("click", window.logout);
  document.getElementById("sendBtn").addEventListener("click", window.sendMessage);
});
