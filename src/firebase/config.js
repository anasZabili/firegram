import * as firebase from "firebase/app";
// storage for image
import "firebase/storage";
// database
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCAgcdDbWRsgVAowzDNvowskj7b99owFBw",
  authDomain: "firegram-a0bba.firebaseapp.com",
  databaseURL: "https://firegram-a0bba.firebaseio.com",
  projectId: "firegram-a0bba",
  storageBucket: "firegram-a0bba.appspot.com",
  messagingSenderId: "389131691187",
  appId: "1:389131691187:web:9e56991a42304cf82cbcc6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// initializastion of the services
const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timestamp };
