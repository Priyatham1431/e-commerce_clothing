// import firebase from "firebase/app";
// require(firebase/firestore);
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBu9ddOmdQ38G--ogfNBHtUek4in_m95Po",
    authDomain: "clothing-db-3c157.firebaseapp.com",
    projectId: "clothing-db-3c157",
    storageBucket: "clothing-db-3c157.appspot.com",
    messagingSenderId: "41279453529",
    appId: "1:41279453529:web:a97af88ef3b36a2ddb3448"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
