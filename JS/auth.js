import { auth } from "./firebase-config.js";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Email login
window.loginUser = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "movies.html";
  } catch (error) {
    alert(error.message);
  }
};

// Google login
const provider = new GoogleAuthProvider();

window.googleLogin = async function () {
  try {
    await signInWithPopup(auth, provider);
    window.location.href = "movies.html";
  } catch (error) {
    alert(error.message);
  }
};