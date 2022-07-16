import React from "react";
import { useNavigate } from "react-router-dom";

const Post = ({ post, postsList, isLoggedIn, postId, setPostId }) => { //remove unused variables, they were used for console.logs

    const navigate = useNavigate();

    const navigateToId = () => {
        // console.log("this Post variable", post._id)
        setPostId(post._id) //do i need this state really?
        // console.log("postId from Post.js", postId)
        navigate(`/posts/${post._id}`);
    }

  return (
    <div className="individual-post">
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <p><b>Price: </b>{post.price}</p>
      <h3>Seller: {post.author.username}</h3>
      <p><b>Location: </b>{post.location}</p>
      {post.willDeliver ? <p>Seller willing to deliver.</p> : <p>Delivery not available.</p>}

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
