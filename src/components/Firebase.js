import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD8-nIkXcTXxUty0hxAqsDdG7UIE7UBcKg",
    authDomain: "tasty-coffee-a83d5.firebaseapp.com",
    projectId: "tasty-coffee-a83d5",
    storageBucket: "tasty-coffee-a83d5.appspot.com",
    messagingSenderId: "688040615281",
    appId: "1:688040615281:web:c2685118cad801b032aad0",
    measurementId: "G-ZP2B57RR7V"
  };

const app = firebase.initializeApp(firebaseConfig)
export const firestore = firebase.firestore(app)