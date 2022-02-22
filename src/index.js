import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAu3-Hzm7sBNg_Pbpb1MXj3N79ZuhZvwxA",
  authDomain: "game-carrazana.firebaseapp.com",
  projectId: "game-carrazana",
  storageBucket: "game-carrazana.appspot.com",
  messagingSenderId: "947137141333",
  appId: "1:947137141333:web:51d8b4807b10af43fad2dc"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
