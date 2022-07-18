import React, { useState } from "react";
import { Link } from "react-router-dom";
import Post from "./Post";
import SearchBar from "./SearchBar";

const Posts = ({ postsList, isLoggedIn, postId, setPostId }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const postsToDisplay = searchTerm.length ? filteredPosts : postsList;
  return (
    <div>
      <div className="post-page-header">
        <h1 className="post-page-header">Things Posted</h1>
        {isLoggedIn ? <Link to="/posts/add">Add New Post</Link> : null}
        {isLoggedIn ? (
          <SearchBar
            postsList={postsList}
            filteredPosts={filteredPosts}
            setFilteredPosts={setFilteredPosts}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        ) : null}
      </div>
      {postsToDisplay
        ? postsToDisplay.map((post) => (
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
