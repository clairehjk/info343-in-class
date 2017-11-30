import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

//Initialize Firebase
 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyD2gBNWLGOZytZHo6F2o1j26DWZgMxr3lE",
  authDomain: "info343-tasks.firebaseapp.com",
  databaseURL: "https://info343-tasks.firebaseio.com",
  projectId: "info343-tasks",
  storageBucket: "info343-tasks.appspot.com",
  messagingSenderId: "179520650138"
};
firebase.initializeApp(config);

firebase.auth().signInAnonymously()
  .then(() => {
    ReactDOM.render(<App />, document.getElementById('root'));    
    registerServiceWorker();
  })
  .catch(err => console.error(err));

