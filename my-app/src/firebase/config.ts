import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDNxyI5LreHCZRDyAAGqyNuS4UTQ24F10A",
    authDomain: "mymoneyproject-cc9eb.firebaseapp.com",
    projectId: "mymoneyproject-cc9eb",
    storageBucket: "mymoneyproject-cc9eb.appspot.com",
    messagingSenderId: "737423025922",
    appId: "1:737423025922:web:c41ceaacfaecf601aa841b"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
export { projectFirestore, projectAuth }