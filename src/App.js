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
  Register,
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
    
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        console.log("userToken", userToken)
        return userToken.token //there was a ? here on repo
    }
    const [token, setToken] = useState();

    console.log("token in App.js", token)

    if(!token){
          
        console.log("Im hiting else if ");
        return <Register setToken={setToken} />
      }


  return (
    <div /*className="App"*/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/posts" element={<Posts postsList={postsList} />}></Route>
        <Route path="/profile" element={<Profile />}></Route>   
        <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register setToken={setToken} />}></Route>      
      </Routes>
    </div>
  );
};

export default App;
