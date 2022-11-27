import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import LoginComponent from './Login/login';
import SignupComponent from './Signup/signup';
import DashboardComponent from './Dashboard/dashboard';

const firebase = require("firebase");
require("firebase/firestore"); 

firebase.initializeApp({
  apiKey: "AIzaSyCBTYaRBicPAuSpcjqWh2nL20rsU3sbmfY",
    authDomain: "webapp-9cd32.firebaseapp.com",
    databaseURL: "https://webapp-9cd32.firebaseio.com",
    projectId: "webapp-9cd32",
    storageBucket: "webapp-9cd32.appspot.com",
    messagingSenderId: "781852891306",
    appId: "1:781852891306:web:fbbe434a068723034b98d3",
    measurementId: "G-XF3Y22MXXV"
});

const routing = (
  <Router>
    <div id='routing-container'>
      <Route path='/login' component={LoginComponent}></Route>
      <Route path='/signup' component={SignupComponent}></Route>
      <Route path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
