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
1. if account already exists on register page, show alert
3. 
*/

/* Things to fix:
1. In Reigster component, figure out how to alert if account already exists. At one point it was console logging data swith an object message saying user already exists, not sure where it went
2. makeHeaders function
 */

/* Questions
1.If i am destructuring props in the componenets, do i need to set them in the routes?
3. Is it ok to have both token and isLogged in states? They technically are the same thing...
4. I tried to keep all of my states at top level in App.js, but I don't think some of them need to be that high. Is that ok to keep everything like that and pass everything through props?

5. why is my postId state console.log lagged?
 */