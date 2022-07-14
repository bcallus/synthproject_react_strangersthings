import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { fetchAllPosts } from "./api";

// will need to import each component
import {
  Navbar,
  Home,
    Posts,
  AddPost,
  Profile,
  Login,
  Logout,
  Register,
  //etc,
  //etc,
} from "./components";

const App = () => {
  const [postsList, setPostsList] = useState([]);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPosts, setUserPosts] = useState([]);
  const [userMessages, setUserMessages] = useState([]);
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
    //is this ever called on?
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    // console.log("userToken", userToken)
    return userToken.token; //there was a ? here on repo
  };
  const [token, setToken] = useState();

  // console.log("token in App.js", token)

  return (
    <div>
      <Navbar token={token} isLoggedIn={isLoggedIn} />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>

              <Route path="/posts" element={<Posts postsList={postsList} />}></Route>
              
              <Route path="/posts/add" element={<AddPost />}></Route>

        <Route
          path="/profile"
          element={
            <Profile
              token={token}
              username={username}
              userPosts={userPosts}
              setUserPosts={setUserPosts}
              userMessages={userMessages}
              setUserMessages={setUserMessages}
            />
          }
        ></Route>

        <Route
          path="/login"
          element={
            <Login
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              setToken={setToken}
              isLoggedin={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        ></Route>

        <Route
          path="/logout"
          element={
            <Logout
              setIsLoggedIn={setIsLoggedIn}
              setToken={setToken}
              //   isLoggedIn={isLoggedIn} //just used this for console logs in the Logout component
              //   token={token}           //can delete if not needed there
            />
          }
        ></Route>

        <Route
          path="/register"
          element={
            <Register
              setToken={setToken}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
            />
          }
              ></Route>
      </Routes>
    </div>
  );
};

export default App;
