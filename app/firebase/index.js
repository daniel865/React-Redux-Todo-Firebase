import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyA076uW705rWgFSBbbugzgOfEdfgkZbVSM",
    authDomain: "todo-app-690e9.firebaseapp.com",
    databaseURL: "https://todo-app-690e9.firebaseio.com",
    storageBucket: "todo-app-690e9.appspot.com",
    messagingSenderId: "878417390389"
  };
  firebase.initializeApp(config);
} catch (e) {

} finally {

}


export var firebaseRef = firebase.database().ref();
export default firebase;
