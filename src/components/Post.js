import React from "react";
import { useNavigate } from "react-router-dom";

const Post = ({ post, postsList, isLoggedIn, postId, setPostId }) => {

    const navigate = useNavigate();

    const navigateToId = () => {
        console.log("this Post variable", post._id)
        setPostId(post._id) //do i need this state really?
        console.log("postId from Post.js", postId)
        navigate(`/posts/${post._id}`);
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
          <button onClick={navigateToId}>View</button>
        ) : (
          <button onClick={navigateToId}>Send Message</button>
        )
          ) : null}
      </div>
  );
};

export default Post;
