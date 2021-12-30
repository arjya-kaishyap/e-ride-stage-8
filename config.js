import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCY3kFhv0cfBI-843tn3mNZ8tTNIjVj06M",
  authDomain: "e-ride-stage-4-b0f22.firebaseapp.com",
  projectId: "e-ride-stage-4-b0f22",
  storageBucket: "e-ride-stage-4-b0f22.appspot.com",
  messagingSenderId: "446862623921",
  appId: "1:446862623921:web:871b09ef643c54942ece90"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
