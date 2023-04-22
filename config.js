import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyDJmMFhWiRVptjuBPY4VY8cIDJ5Pci40q4",
  authDomain: "bicycle-f213f.firebaseapp.com",
  projectId: "bicycle-f213f",
  storageBucket: "bicycle-f213f.appspot.com",
  messagingSenderId: "388029772722",
  appId: "1:388029772722:web:790f5b55b896c94240aaab"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
