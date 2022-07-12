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
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
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
        // console.log("userToken", userToken)
        return userToken.token //there was a ? here on repo
    }
    const [token, setToken] = useState();

    // console.log("token in App.js", token)

    //fix this ternary
    return (
        // token ?
            <div>
            <Navbar token={ token } />
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route path="/posts" element={<Posts postsList={postsList} />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                <Route path="/login" element={<Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} />}></Route>
                <Route path="/register" element={<Register setToken={setToken} username={username} setUsername={setUsername} password={password} setPassword={setPassword} />}></Route>
                </Routes>
            </div>
            // : <div>
            //     <Navbar />
            //     <Routes>
            //         <Route exact path="/" element={<Home />}></Route>
            //         <Route path="/posts" element={<Posts postsList={postsList} />}></Route>
            //         <Route path="/login" element={<Login />}></Route>
            //         <Route path="/register" element={<Register setToken={setToken} />}></Route>
            //     </Routes>
            // </div>
  );
};

export default App;
