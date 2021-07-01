import * as firebase from "firebase/app";
// storage for image
import "firebase/storage";
// database
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  x: "xxx"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// initializastion of the services
const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFireStore, timestamp };
