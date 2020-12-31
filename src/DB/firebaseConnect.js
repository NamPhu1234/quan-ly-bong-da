import  firebase from 'firebase'

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCezM2iYqQyFm_PeartTkDE9sKpJZGxCOE",
    authDomain: "qlbongda-3958f.firebaseapp.com",
    databaseURL: "https://qlbongda-3958f-default-rtdb.firebaseio.com",
    projectId: "qlbongda-3958f",
    storageBucket: "qlbongda-3958f.appspot.com",
    messagingSenderId: "525898211463",
    appId: "1:525898211463:web:7a62fc13c48afd497a1822",
    measurementId: "G-06NCG8D0M4"
});
const db = firebaseApp.firestore();
export default db;