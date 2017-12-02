import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Admin from "./Admin";
var config = {
    apiKey: "APIKEY",
    authDomain: "PROJECTID.firebaseapp.com",
    databaseURL: "https://PROJECTID.firebaseio.com",
    projectId: "PROJECTID",
    storageBucket: "PROJECTID.appspot.com",
    messagingSenderId: "MESSAGINGSENDERID"
  };
  firebase.initializeApp(config);

ReactDOM.render(
        <Router>
                 <Switch>
                    <Route exact path='/' component={App} />
                    <Route exact path='/admin' component={Admin} />
                 </Switch>
           </Router>, document.getElementById('root'));
registerServiceWorker();
