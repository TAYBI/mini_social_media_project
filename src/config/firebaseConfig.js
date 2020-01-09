import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCdhbsnhvjs-tjINVH3LJlorL8ijjRzn9Y",
  authDomain: "react-redux-firebase-projects.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-projects.firebaseio.com",
  projectId: "react-redux-firebase-projects",
  storageBucket: "react-redux-firebase-projects.appspot.com",
  messagingSenderId: "121796789268",
  appId: "1:121796789268:web:aef210e6cbe27487275301",
  measurementId: "G-4X22LV2QWW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
