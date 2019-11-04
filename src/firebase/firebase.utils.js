import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBGFS15LdsHMlAoCch3yceq77lpbv7XooE",
    authDomain: "crown-db-772e7.firebaseapp.com",
    databaseURL: "https://crown-db-772e7.firebaseio.com",
    projectId: "crown-db-772e7",
    storageBucket: "crown-db-772e7.appspot.com",
    messagingSenderId: "379896465134",
    appId: "1:379896465134:web:ab6f716a3b8c2a323955ff"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters( { prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;
