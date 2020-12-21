import firebase from '@react-native-firebase/app';
import Auth from '@react-native-firebase/auth'
import analytics from '@react-native-firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAjc1rKY8ub8eP-AwV63Qi7xDejKGDxNb4",
  authDomain: "pocreactnativeanalytics.firebaseapp.com",
  projectId: "pocreactnativeanalytics",
  storageBucket: "pocreactnativeanalytics.appspot.com",
  messagingSenderId: "797555695801",
  appId: "1:797555695801:web:8edb8ec32efc03901d7b68"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export  { firebase, Auth, analytics };