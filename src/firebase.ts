import firebase from "firebase/app";
import "firebase/auth";

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
