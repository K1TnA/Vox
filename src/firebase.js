// firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB5NEkym34hgKEivP5A8iQul8dj5yxZkd4",
  authDomain: "voxa-91b63.firebaseapp.com",
  projectId: "voxa-91b63",
  storageBucket: "voxa-91b63.appspot.com", 
  messagingSenderId: "457051717225",
  appId: "1:457051717225:web:8ab76651671eb73a86ecf8",
  measurementId: "G-JVN767MR51",
};


const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);


export { app, analytics, auth, db, storage, ref, uploadBytes, getDownloadURL };
