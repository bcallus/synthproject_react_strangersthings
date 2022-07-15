import React from "react";

const Post = ({ post, postsList, isLoggedIn }) => {
  return (
    <div className="individual-post">
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <p>{post.price}</p>
      <h2>{post.author.username}</h2>
      <p>{post.locaiton}</p>

      {isLoggedIn ? (
        post.isAuthor ? (
          <button>View</button> //set id state on click to route page?
        ) : (
          <button>Send Message</button>
        )
      ) : null}
    </div>
  );
};

export default Post;
