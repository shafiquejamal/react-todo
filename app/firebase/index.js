import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyDu97GgcjMcZ2hUPXN6laDC0NuGXHB2DzI",
      authDomain: "jamal-todo-app.firebaseapp.com",
      databaseURL: "https://jamal-todo-app.firebaseio.com",
      storageBucket: "jamal-todo-app.appspot.com",
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref()
export default firebase; 
