
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDoW3trPlaXcUccUQOzH7uZ7kMyT-o98mI",
    authDomain: "sshortart-c9214.firebaseapp.com",
    projectId: "sshortart-c9214",
    storageBucket: "sshortart-c9214.appspot.com",
    messagingSenderId: "54987425512",
    appId: "1:54987425512:web:9ba3ae41b93b28a92deb5d",
    measurementId: "G-RFF8CDGTF5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  
  const submitButton = document.getElementById("submit");
  const signupButton = document.getElementById("sign-up");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const main = document.getElementById("main");
  const createacct = document.getElementById("create-acct")
  
  const signupEmailIn = document.getElementById("email-signup");
  const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
  const signupPasswordIn = document.getElementById("password-signup");
  const confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
  const createacctbtn = document.getElementById("create-acct-btn");
  
  const returnBtn = document.getElementById("return-btn");
  
  var email, password, signupEmail, signupPassword, confirmSignupEmail, confirmSignUpPassword;
  
  createacctbtn.addEventListener("click", function() {
    var isVerified = true;
  
    signupEmail = signupEmailIn.value;
    confirmSignupEmail = confirmSignupEmailIn.value;
    if(signupEmail != confirmSignupEmail) {
        window.alert("Email not match. Try again.")
        isVerified = false;
    }
  
    signupPassword = signupPasswordIn.value;
    confirmSignUpPassword = confirmSignUpPasswordIn.value;
    if(signupPassword != confirmSignUpPassword) {
        window.alert("Password not match. Try again.")
        isVerified = false;
    }
    
    if(signupEmail == null || confirmSignupEmail == null || signupPassword == null || confirmSignUpPassword == null) {
      window.alert("Please fill out all required fields.");
      isVerified = false;
    }
    
    if(isVerified) {
      createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        window.alert("Success! Account created.");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        window.alert("Error occurred. Try again.");
      });
    }
  });
  
  submitButton.addEventListener("click", function() {
    email = emailInput.value;
    console.log(email);
    password = passwordInput.value;
    console.log(password);
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Success! Welcome back!");
        window.alert("Success! Welcome back!");
        window.location.href="sucess.html";
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error occurred. Try again.");
        window.alert("Error occurred. Try again.");
      });
  });
  
  signupButton.addEventListener("click", function() {
      main.style.display = "none";
      createacct.style.display = "block";
  });
  
  returnBtn.addEventListener("click", function() {
      main.style.display = "block";
      createacct.style.display = "none";
  });

  