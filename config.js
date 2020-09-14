import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDnVhvZsYFsHSQmbd0RehgpUzkpbSj9fFU",
  authDomain: "book-santa-f1318.firebaseapp.com",
  databaseURL: "https://book-santa-f1318.firebaseio.com",
  projectId: "book-santa-f1318",
  storageBucket: "book-santa-f1318.appspot.com",
  messagingSenderId: "362198799749",
  appId: "1:362198799749:web:10a73a5b6abb1e8bb460ec"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
