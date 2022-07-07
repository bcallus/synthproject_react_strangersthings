import React from 'react';
import ReactDOM from 'react-dom/client';

// will need to import each component
/*import {
  Component1,
  Component2,
  etc,
  etc,
} from "./components";*/

const App = () => {
  return (
    <div>Test</div>
  )

};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);