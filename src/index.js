import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC9p4u9gk49v4YekwGJYZa8DBqUdhottsc",
    authDomain: "reactcv-5cceb.firebaseapp.com",
    databaseURL: "https://reactcv-5cceb.firebaseio.com",
    projectId: "reactcv-5cceb",
    storageBucket: "reactcv-5cceb.appspot.com",
    messagingSenderId: "771929300113"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
