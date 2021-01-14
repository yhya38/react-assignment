import firebase from 'firebase'

const config={
    apiKey: "AIzaSyD2y94CS4erW0QwedNXgENvCDwVGVw-hYk",
    authDomain: "e-commerce-app-94f4d.firebaseapp.com",
    databaseURL: "https://fir-react-6c018.firebaseio.com",
    projectId: "e-commerce-app-94f4d",
    storageBucket: "e-commerce-app-94f4d.appspot.com",
    messagingSenderId: "983854896610",
    appId: "1:983854896610:web:7166c2ed212cdaf790d5bb",
    measurementId: "G-5K0WDGH9TZ"
}
firebase.initializeApp(config);
export default firebase;

