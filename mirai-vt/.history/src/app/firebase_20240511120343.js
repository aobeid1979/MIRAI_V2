import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // Your Firebase configuration here
  // You can find it in your Firebase console
  apiKey: "AIzaSyDhzmeihbw-npxK13YI-xsPdzP3XvSQqw4",
  authDomain: "mirai-65100.firebaseapp.com",
  projectId: "mirai-65100",
  storageBucket: "mirai-65100.appspot.com",
  messagingSenderId: "43514647074",
  appId: "1:43514647074:web:4308d18363f87b03a9b07b",
  measurementId: "G-0JJLD282F6"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;