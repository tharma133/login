import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCaGQtjm1Q6dLyeklmLSKUspVFnqDPHUhU",
  authDomain: "login-204c2.firebaseapp.com",
  projectId: "login-204c2",
  storageBucket: "login-204c2.appspot.com",
  messagingSenderId: "151092685991",
  appId: "1:151092685991:web:2cfd2ed6a5d4e0e354bf82",
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const provider = new firebase.auth.FacebookAuthProvider();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

// provider.addScope("user_friends");

export default firebase;
