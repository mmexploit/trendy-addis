import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config = {
    apiKey: "AIzaSyA0pDmUfvixTLhY33euvNoyRacyblXY-1w",
    authDomain: "trendy-addis.firebaseapp.com",
    projectId: "trendy-addis",
    storageBucket: "trendy-addis.appspot.com",
    messagingSenderId: "649811660123",
    appId: "1:649811660123:web:08630c5583465d62f81e7e",
    measurementId: "G-JE3JL51T9L"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;