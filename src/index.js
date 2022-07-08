import React from 'react';
import ReactDOM from 'react-dom/client';

// will need to import each component
import {
  Navbar,
  Home,
  Posts,
  Profile,
  //etc,
  //etc,
} from "./components";

const App = () => {

  return (
    <div> 
      <Navbar />
      <Home />
      <Posts />
      <Profile />
    </div>
  )

};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);