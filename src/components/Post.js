import React from "react";

const Post = ({post}) => {
  return (
    <div className="individual-post">
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <p>{post.price}</p>
      <h2>{post.author.username}</h2>
      <p>{post.locaiton}</p>
    </div>
  );
};

export default Post;
