import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'


import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <Router>
    <App />
  </Router>
);

/*next steps:
1. optionally store token in localStorage if you want to save it for automatically logging in the user upon the next app load???
1. If register is unsucessful, add alert?
3. if logged in, show log out button
*/