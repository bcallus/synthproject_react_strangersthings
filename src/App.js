import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { fetchAllPosts } from "./api";

// will need to import each component
import {
  Navbar,
  Home,
  Posts,
  Profile,
  Login,
  //etc,
  //etc,
} from "./components";

const App = () => {
  const [postsList, setPostsList] = useState([]);
  // const [post, setPost] = useState({});

  useEffect(() => {
    fetchAllPosts().then((results) => {
      // console.log("post", results.data.posts)
      setPostsList(results.data);
    });
  }, []);

  // console.log("postsList", postsList)
  // console.log("post", post)

  return (
    <div /*className="App"*/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/posts" element={<Posts postsList={postsList} />}></Route>
        <Route path="/profile" element={<Profile />}></Route>   
        <Route path="/login" element={<Login />}></Route>      
      </Routes>
    </div>
  );
};

export default App;
