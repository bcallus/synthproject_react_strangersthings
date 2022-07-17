import React from "react";
import { Link } from "react-router-dom";
import Post from "./Post";
import SearchBar from "./SearchBar"

const Posts = ({ postsList, isLoggedIn, postId, setPostId }) => {
//   console.log("postsList from Posts.js", postsList);

  return (
    <div>
      <div className="post-page-header">
        <h1>Posts</h1>
        {isLoggedIn ? <Link to="/posts/add">Add New Post</Link> : null}
        {isLoggedIn ? <SearchBar postsList={postsList} /> : null}
      </div>
      {postsList
        ? postsList.map((post) => (
            <Post
                key={post._id}
                post={post}
                postsList={postsList}
                isLoggedIn={isLoggedIn}
                postId={postId}
                setPostId={setPostId}
                />
          ))
        : null}
    </div>
  );
};

export default Posts;
