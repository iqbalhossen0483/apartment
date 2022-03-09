import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import FirebaseProvider from './context/firebase/FirebaseProvider';

ReactDOM.render(
  <BrowserRouter>
    <FirebaseProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FirebaseProvider>
  </BrowserRouter>,
  document.getElementById('root')
);