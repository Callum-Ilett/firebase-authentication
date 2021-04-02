import firebase from "firebase/app";
import "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_AUTH_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyC-KNy3ayOTwYi79g0QVqFOBA192CSxVB0",
  authDomain: "fir-demo-d2f53.firebaseapp.com",
  projectId: "fir-demo-d2f53",
  storageBucket: "fir-demo-d2f53.appspot.com",
  messagingSenderId: "78054757815",
  appId: "1:78054757815:web:c0c140c95624f5fa130432",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export type UserInterface = firebase.User;
