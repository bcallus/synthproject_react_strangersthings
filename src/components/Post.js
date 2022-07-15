import React from "react";

const Post = ({ post, postsList }) => {
  return (
    <div className="individual-post">
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <p>{post.price}</p>
      <h2>{post.author.username}</h2>
      <p>{post.locaiton}</p>
      {post.isAuthor ? <button>View</button> : <button>Send Message</button>}
    </div>
  );
};

export default Post;
