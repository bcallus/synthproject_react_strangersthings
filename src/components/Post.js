import React from "react";

const Post = (props) => {
  return (
    <div className="individual-post">
      <h2>{props.post.title}</h2>
      <p>{props.post.description}</p>
      <p>{props.post.price}</p>
      <h2>{props.post.author.username}</h2>
      <p>{props.post.locaiton}</p>
    </div>
  );
};

export default Post;
