import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYAOhy0O-1EiG7czTJyrQdQBnCDuB1Fy8",
  authDomain: "facebook-clone-3f970.firebaseapp.com",
  databaseURL: "https://facebook-clone-3f970.firebaseio.com",
  projectId: "facebook-clone-3f970",
  storageBucket: "facebook-clone-3f970.appspot.com",
  messagingSenderId: "920532155866",
  appId: "1:920532155866:web:9ce21a4123de9353de54e3",
  measurementId: "G-B4S4T4RNDT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = new firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export default db;
export {auth, provider};

