import React from 'react';
import ReactDOM from 'react-dom';
import './homepage.css'; // Make sure to import the required stylesheets here.
import HomePage from './HomePage'; // Adjust the import path if needed.

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById('root')
);
