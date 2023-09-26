import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
{
  const firebaseConfig = {
    apiKey: "AIzaSyCKylsW_-WWHuk1bB26PHhVQRLes_urLc4",
    authDomain: "m-r-s-10flrs23.firebaseapp.com",
    projectId: "m-r-s-10flrs23",
    storageBucket: "m-r-s-10flrs23.appspot.com",
    messagingSenderId: "1053801671005",
    appId: "1:1053801671005:web:171338e8e2cddf5a9920b4",
    measurementId: "G-2FGENH18JQ",
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  const submitButton = document.getElementById("submit");
  const signupButton = document.getElementById("sign-up");
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const main = document.getElementById("main");
  const createacct = document.getElementById("create-acct");

  const signupEmailIn = document.getElementById("email-signup");
  const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
  const signupPasswordIn = document.getElementById("password-signup");
  const confirmSignUpPasswordIn = document.getElementById(
    "confirm-password-signup"
  );
  const createacctbtn = document.getElementById("create-acct-btn");
  const returnBtn = document.getElementById("return-btn");
  const msg = document.getElementById("msg");

  var email,
    password,
    username,
    signupEmail,
    signupPassword,
    confirmSignupEmail,
    confirmSignUpPassword;

  createacctbtn.addEventListener("click", function () {
    var isVerified = true;

    signupEmail = signupEmailIn.value;
    confirmSignupEmail = confirmSignupEmailIn.value;
    if (signupEmail != confirmSignupEmail) {
      msg.innerHTML = "Email fields do not match. Try again.";
      isVerified = false;
    }

    signupPassword = signupPasswordIn.value;
    confirmSignUpPassword = confirmSignUpPasswordIn.value;
    if (signupPassword != confirmSignUpPassword) {
      msg.innerHTML = "Password fields do not match. Try again.";
      isVerified = false;
    }

    if (
      username == null ||
      signupEmail == null ||
      confirmSignupEmail == null ||
      signupPassword == null ||
      confirmSignUpPassword == null
    ) {
      msg.innerHTML = "Please fill out all required fields.";
      isVerified = false;
    }

    if (isVerified) {
      createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
        .then((userCredential) => {
          const user = userCredential.user;
          msg.innerHTML = "Success! Account created.";
          window.location.href = "dashboard.html";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          msg.innerHTML = "Error occurred. Try again.";
        });
    }
  });

  submitButton.addEventListener("click", function () {
    email = emailInput.value;
    password = passwordInput.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user.email.split("@")[0];
        localStorage.setItem("user", user);
        console.log(user);
        msg.innerHTML = "Success! Welcome back!";
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        msg.innerHTML = "Error occurred. Try again.";
      });
  });

  signupButton.addEventListener("click", function () {
    main.style.display = "none";
    createacct.style.display = "block";
  });

  returnBtn.addEventListener("click", function () {
    main.style.display = "block";
    createacct.style.display = "none";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  {
    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTRkODJmMTNjYmVjMTUwYWY0MDI3OTYxZTdhNzRhNyIsInN1YiI6IjY1MGZmYWVmMDljMjRjMDBmZmIwNTQwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nV5eemL7MDzbbSjn3OBg-Ei8ZigRbUi2jOWk1HtTB_U",
      },
    };
    const imgtag = document.getElementById("bg-img");
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        const background = response.results[getRndInteger(0, 10)].backdrop_path;
        imgtag.src = "https://image.tmdb.org/t/p/original" + background;
      })
      .catch((err) => console.error(err));
  }
});
