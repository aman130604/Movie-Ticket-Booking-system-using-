import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyApk5dlb92-4akur-oSmb3U9BuNh_wwqkc",
  authDomain: "moviemania-970e3.firebaseapp.com",
  projectId: "moviemania-970e3",
  storageBucket: "moviemania-970e3.firebasestorage.app",
  messagingSenderId: "1046425901998",
  appId: "1:1046425901998:web:98ba6b98de34791884c63f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);