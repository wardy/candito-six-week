import Firebase from 'firebase';
import firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

let firebaseApp;

function getFirebaseAppInstance() {
  const firebaseConfig = {
    apiKey: 'AIzaSyAC5rkhmJjF1ErxtlVwtQfmrT2eJ8K7ALo',
    authDomain: 'candito-six-week-strength.firebaseapp.com',
    databaseURL: 'https://candito-six-week-strength.firebaseio.com',
    storageBucket: 'candito-six-week-strength.appspot.com',
    messagingSenderId: '567954345513'
  };

  if (!firebaseApp) {
    firebaseApp = Firebase.initializeApp(firebaseConfig);
  }
  return firebaseApp;
}

function getFirebaseDatabase() {
  return getFirebaseAppInstance().database();
}

function getFirebaseAuth() {
  return getFirebaseAppInstance().auth();
}

function getFirebaseAuthUIConfig() {
  return {
    signInSuccessUrl: '/',
    signInOptions: [
      Firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      Firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      Firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    tosUrl: '/'
  };
}

function loadAuthUI() {
  const firebaseAuth = getFirebaseAuth();
  const uiConfig = getFirebaseAuthUIConfig();
  const ui = new firebaseui.auth.AuthUI(firebaseAuth);
  ui.start('#firebaseui-auth-container', uiConfig);
}

function getUser() {
  return getFirebaseAuth().currentUser;
}

function checkLoginStatus(signedInCallback, signedOutCallback) {
  getFirebaseAuth().onAuthStateChanged(user => {
    if (user) {
      signedInCallback();
    } else {
      signedOutCallback();
    }
  });
}

function checkLoginStatusPromise() {
  return new Promise((resolve, reject) => {
    getFirebaseAuth().onAuthStateChanged(user => resolve(user), error => reject(error));
  });
}


function signOut() {
  return getFirebaseAuth().signOut();
}

export default {
  getFirebaseDatabase,
  getFirebaseAuth,
  getFirebaseAuthUIConfig,
  getUser,
  checkLoginStatus,
  checkLoginStatusPromise,
  loadAuthUI,
  signOut
};
