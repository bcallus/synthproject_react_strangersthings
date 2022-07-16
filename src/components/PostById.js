import React from "react";

const PostById = ({ postsList, setPostId, postId, postById, setPostById }) => {
  console.log("postsList in PostById", postsList);
  console.log("postId in PostById", postId);
  console.log("postById state in PostById", postById);

  // postsList.map(post => {
  //     if (post._id === postId) {
  //         console.log("this one matches", post)
  //     }
  // })

  return (
    <div>
      <h1>Test</h1>
      {postsList.map((post) => {
        if (post._id === postId) {
          return (
            <div className="individual-post">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <p>{post.price}</p>
              <h2>{post.author.username}</h2>
              <p>{post.locaiton}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default PostById;
