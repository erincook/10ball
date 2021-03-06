﻿//Connect to firebase
var config = {
    apiKey: "AIzaSyCD1dJiTpIv0MygHTH5J97FHVl6QnMZNFk",
    authDomain: "ball-6af20.firebaseapp.com",
    databaseURL: "https://ball-6af20.firebaseio.com",
    projectId: "ball-6af20",
    storageBucket: "ball-6af20.appspot.com",
    messagingSenderId: "48314393073"
};
firebase.initializeApp(config);

// Call Upon Firebase Database
var database = firebase.database();

//register a user
function userSignUp() {
    var email = document.getElementById('userEmail').value;
    var password = document.getElementById('userPassword').value;
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }
    // Sign in with email and pass.
    // [START createwithemail]
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
    });
    // [END createwithemail]
}

// login a user


// coonect to data to store other info

// account login | register  page hide/showS
function displayLoginForm() {
    var logInForm = document.getElementById("loginForm");
    if (logInForm.style.display === "none") {
        logInForm.style.display = "block";
        document.getElementById("registerForm").style.display = "none";
    } else {
        logInForm.style.display = "none";
    }
}
function displayRegistrationForm() {
    var regForm = document.getElementById("registerForm");
    if (regForm.style.display === "none") {
        regForm.style.display = "block";
        document.getElementById("loginForm").style.display = "none";
    } else {
        regForm.style.display = "none";
    }
}