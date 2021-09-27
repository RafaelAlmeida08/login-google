import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDwadkk5DkD9rP8jBPsXQebR4tpy8cYOwE",
    authDomain: "login-61e9c.firebaseapp.com",
    projectId: "login-61e9c",
    storageBucket: "login-61e9c.appspot.com",
    messagingSenderId: "924416861065",
    appId: "1:924416861065:web:e4c23ab941b2ffc858b758"
  };


const app = !firebase.apps.length 
            ? firebase.initializeApp(firebaseConfig)
            : firebase.app();


const db = app.firestore();

const auth = app.auth();

const provider =  new firebase.auth.GoogleAuthProvider();


export {  db, provider, auth }

