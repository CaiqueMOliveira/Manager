import firebase from 'firebase';

export const initializeFirebase = () => {
  const config = {
    apiKey: "AIzaSyAyDgQUv5fn6h-y-MbnwwqKYlawXKuM4F0",
    authDomain: "manager-18856.firebaseapp.com",
    databaseURL: "https://manager-18856.firebaseio.com",
    projectId: "manager-18856",
    storageBucket: "manager-18856.appspot.com",
    messagingSenderId: "414664316403"
  };

  firebase.initializeApp(config);
}

export const insertNewEmployee = async ({ name, phone, shift, currentUserAuth }) => {
  try {

    await firebase.database().ref(`users/${currentUserAuth}/employees`)
      .push({ name, phone, shift });

    return true;

  } catch (error) { return false; }
};
