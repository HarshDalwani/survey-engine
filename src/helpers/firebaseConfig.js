import { initializeApp } from 'firebase';
import 'firebase/firestore'
// import firebase from 'firebase/app'
import 'firebase/firestore'

 const app = initializeApp({
    apiKey: "AIzaSyD6W-gq2t0AkxpiVg96AHUaa5tgXcPtE2A",
    authDomain: "survey-engine-a230d.firebaseapp.com",
    databaseURL: "https://survey-engine-a230d.firebaseio.com",
    projectId: "survey-engine-a230d",
    storageBucket: "",
    messagingSenderId: "1058605142599",
    appId: "1:1058605142599:web:6891430e0d31e709"  
});


// Get a Firestore instance
export const db =  app.firestore()

 

// // Export types that exists in Firestore
// // This is not always necessary, but it's used in other examples
// const { TimeStamp, GeoPoint } = firebase.firestore
// export { TimeStamp, GeoPoint }

// // if using Firebase JS SDK < 5.8.0
// db.settings({ timestampsInSnapshots: true })


 
// //  export const db = app.firestore();
// //  export const namesRef = db.collection('names').doc('NM').set();

