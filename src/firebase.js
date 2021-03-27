import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBrYFOliWZFFFCCWHq2q6DTF52QIuhBTPU",
    authDomain: "sarcopenia-servey-app.firebaseapp.com",
    projectId: "sarcopenia-servey-app",
    storageBucket: "sarcopenia-servey-app.appspot.com",
    messagingSenderId: "270673028338",
    appId: "1:270673028338:web:c2e68a5c97aee7cd309c6b",
    measurementId: "G-Q5TYNW4BHT"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const records = db.collection('records')
const provinces = db.collection('provinces')

export {
    firebase as fb,
    db,
    records,
    provinces,
    auth
}