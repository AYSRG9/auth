import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
console.log("index.js");

const firebaseConfig = {
  apiKey: "AIzaSyDNFP9U9Z5WVdZ8eLgRRQkfacK-UoVI0lM",
  authDomain: "learning-firebase-9-f3ac3.firebaseapp.com",
  projectId: "learning-firebase-9-f3ac3",
  storageBucket: "learning-firebase-9-f3ac3.appspot.com",
  messagingSenderId: "809691722880",
  appId: "1:809691722880:web:66f17d15b7be19ad596265",
};

// init firebase 9
initializeApp(firebaseConfig);

// init services
const auth = getAuth();

// signup user
const signupForm = document.querySelector(".signup");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("emailup").value;
  const password = document.getElementById("passwordup").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log("user created", cred.user);
      alert("user created");
      signupForm.reset();
    })
    .catch((err) => {
      console.log(err.message);
      alert(err.message);
    });
});

// signin user
const signinForm = document.querySelector(".signin");
signinForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("emailin").value;
  const password = document.getElementById("passwordin").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log(cred.user);
      alert("login");
      window.location.href = "dashboard.html";
    })
    .catch((err) => {
      console.log(err.message);
      alert(err.message);
    });
});

// logout user
const logoutButton = document.querySelector(".logout");
logoutButton.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      console.log("logout");
      alert("logout");
      window.location.href = "index.html";
    })
    .catch((err) => {
      console.log(err.message);
      alert(err.message);
    });
});
