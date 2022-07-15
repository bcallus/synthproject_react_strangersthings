import React from "react";
import { useNavigate } from "react-router-dom";

const Post = ({ post, postsList, isLoggedIn, postId, setPostId }) => {

    const navigate = useNavigate();

    const assignId = () => {
        setPostId(post._id)
        console.log("post id state from Post.js", postId)
        navigate(`/posts/${postId}`);
    }

  return (
    <div className="individual-post">
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <p>{post.price}</p>
      <h2>{post.author.username}</h2>
    <p>{post.locaiton}</p>

      {isLoggedIn ? (
        post.isAuthor ? (
          <button onClick={assignId}>View</button> //set id state on click to route page?
        ) : (
          <button onClick={assignId}>Send Message</button>
        )
          ) : null}
      </div>
  );
};

export default Post;
