import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDsZj5yTVS1yNvfZX3RxPG1GVPShDsJi_0",
  authDomain: "linkedin-clone-39a89.firebaseapp.com",
  projectId: "linkedin-clone-39a89",
  storageBucket: "linkedin-clone-39a89.appspot.com",
  messagingSenderId: "1068487942270",
  appId: "1:1068487942270:web:f2f637b2698a4e9868f82f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
