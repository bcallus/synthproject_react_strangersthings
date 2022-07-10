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
make routes for the pages, use ryan's repo on token review
make register component, use the same repo */