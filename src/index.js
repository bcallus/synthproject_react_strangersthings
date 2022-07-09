import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'


import { fetchAllPosts } from './api'

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

  const [postsList, setPostsList] = useState([]);
  // const [post, setPost] = useState({});


    useEffect(() => {
        fetchAllPosts().then((results) => {
            // console.log("post", results.data.posts)
          setPostsList(results.data)
        })
    }, []);
    
  // console.log("postsList", postsList)
  // console.log("post", post)

  return (
    <div> 
      <Navbar />
      <Home />
      <Posts 
        postsList={postsList}
        // post={post}
        // setPost={setPost}
      />
      <Profile />
    </div>
  )

};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <Router>
    <App />
  </Router>
);

/*next steps:
make routes for the pages, use ryan's repo on token review
make register component, use the same repo */