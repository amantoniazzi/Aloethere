import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

function isPushNotificationSupported() {
  return "serviceWorker" in navigator && "PushManager" in window;
}

function registerServiceWorker() {
  return navigator.serviceWorker.register("/sw.js");
}

async function askUserPermission() {
  return await Notification.requestPermission();
}