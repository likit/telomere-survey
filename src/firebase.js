import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';
import '@firebase/storage';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmM6qR6aZGbc5naykHNvTtvaRBaUAekrU",
    authDomain: "telomere-survey.firebaseapp.com",
    projectId: "telomere-survey",
    storageBucket: "telomere-survey.appspot.com",
    messagingSenderId: "240965671226",
    appId: "1:240965671226:web:605977faaaf2f4485d9803",
    measurementId: "G-XN9CHMLT59"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const records = db.collection('records')
const provinces = db.collection('provinces')
const followups = db.collection('followups')

export {
    firebase as fb,
    storage,
    db,
    records,
    provinces,
    followups,
    auth
}