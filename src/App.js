import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchAllPosts } from "./api";

import {
  Navbar,
  Home,
  Posts,
  AddPost,
  PostById,
  Profile,
  Login,
  Logout,
  Register,
} from "./components";

const App = () => {
  const [postsList, setPostsList] = useState([]);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPosts, setUserPosts] = useState([]);
  const [userMessages, setUserMessages] = useState([]);
  const [token, setToken] = useState();
  const [postId, setPostId] = useState(" ");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchAllPosts(token).then((results) => {
      setPostsList(results.data.posts);
    });
  }, [token]);

  return (
    <div>
      <Navbar token={token} isLoggedIn={isLoggedIn} />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>

        <Route
          path="/posts"
          element={
            <Posts
              postsList={postsList}
              isLoggedIn={isLoggedIn}
              postId={postId}
              setPostId={setPostId}
            />
          }
        ></Route>

        <Route
          path="/posts/add"
          element={
            <AddPost
              token={token}
              postsList={postsList}
              setPostsList={setPostsList}
            />
          }
        ></Route>

        <Route
          path={`posts/:postId`}
          element={
            <PostById
              postId={postId}
              setPostId={setPostId}
              postsList={postsList}
              setPostsList={setPostsList}
              token={token}
              message={message}
              setMessage={setMessage}
            />
          }
        ></Route>

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
          element={<Logout setIsLoggedIn={setIsLoggedIn} setToken={setToken} />}
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
