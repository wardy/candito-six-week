import Firebase from 'firebase';

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
      Firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      Firebase.auth.GithubAuthProvider.PROVIDER_ID,
      Firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    tosUrl: '/'
  };
}

export default { getFirebaseDatabase, getFirebaseAuth, getFirebaseAuthUIConfig };
