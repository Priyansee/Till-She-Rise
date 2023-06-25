// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
//  import { getDatabase, ref, get, set, update, remove, child }
//  from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js"; 



const firebaseConfig = {
  apiKey: "AIzaSyDvaXgdfnKQd3zCbz05syaUW3Y5mFboyLc",
  authDomain: "swadheenta-56de2.firebaseapp.com",
  databaseURL: "https://swadheenta-56de2-default-rtdb.firebaseio.com",
  projectId: "swadheenta-56de2",
  storageBucket: "swadheenta-56de2.appspot.com",
  messagingSenderId: "26375753192",
  appId: "1:26375753192:web:ff2ea80c9f54d87a41285d"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase();
const auth = getAuth();


signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  var username = document.getElementById("signUpUser").value;
  var email = document.getElementById("signUpEmail").value;
  var password = document.getElementById("signUpPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      // Signed in 
      const user = userCredential.user;

      set(ref(database, "users/" + user.uid), {
        username: username,
        email: email,
        // password: encPass()
      });

      alert("user created");
      window.open("./homepage.html")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error.message);
      alert("errorMessage");
      // ..
    });

});


// function encPass(){
//   var pass12 = CryptoJS.AES.encrypt(password, password);
//   return pass12.toStirng();
// }

signInBtn.addEventListener("click", (e) => {

  e.preventDefault();

  // var username = document.getElementById("signup_username").value;
  var email = document.getElementById("signInEmail").value;
  var password = document.getElementById("signInPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert("signed in");
      window.open("./homepage.html")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert("errorMessage");
      // ..
    });

});


// signOut.addEventListener("onclick", (e) => {
//   const auth = getAuth();
//   signOut(auth).then(() => {
//     // Sign-out successful.
//     alert("user signed out")
//   }).catch((error) => {
//     // An error happened.
//     const errorCode = error.code;
//     const errorMessage = error.message;

//     alert("errorMessage");
//     // ..
//     });
//   });
