import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

//Initialize Firebase
var config = {
    apiKey: "AIzaSyClv8PTtAOQdIXqy7tjAMTXduns-0OJCEE",
    authDomain: "info343-demo-3e87b.firebaseapp.com",
    databaseURL: "https://info343-demo-3e87b.firebaseio.com",
    projectId: "info343-demo-3e87b",
    storageBucket: "info343-demo-3e87b.appspot.com",
    messagingSenderId: "505282955333"
  };
firebase.initializeApp(config);



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

