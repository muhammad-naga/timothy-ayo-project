import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAbV1DMjhyD9QIRdDJKVsy0I1mq7IjF9R4",
  authDomain: "timothy-ayo-project.firebase.com",
  projectId: "timothy-ayo-project",
  storageBucket: "timothy-ayo-project.appspot.com",
  messagingSenderId: "377642062439",
  appId: "1:377642062439:web:7b5abdb41a5e25151ffac2",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
