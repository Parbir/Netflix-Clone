// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
//import firebase from "firebase"

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA1t2j4Swhh8HjHia8Qz2r-Lc-MyB7hlcY",
    authDomain: "netflixclone-98886.firebaseapp.com",
    projectId: "netflixclone-98886",
    storageBucket: "netflixclone-98886.appspot.com",
    messagingSenderId: "525643767790",
    appId: "1:525643767790:web:58bad1f4a85d0aed1eb8ff"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  //const app = initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  //const db = getFirestore(app);
  const auth = firebase.auth();

  export { auth };
  export default db;