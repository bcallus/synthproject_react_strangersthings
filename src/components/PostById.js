import React from "react";
import { useNavigate } from "react-router-dom";
import { createMessage, deletePost } from "../api";

const PostById = ({
  postsList,
  setPostsList,
  postId,
  token,
  message,
  setMessage,
}) => {
  const navigate = useNavigate();

  const handleDelete = async (event) => {
    event.preventDefault();
    const data = await deletePost(postId, token);
    const filteredPostsList = postsList.filter((post) => post._id !== postId);
    setPostsList(filteredPostsList);
    if (data.success) {
      alert("You have sucessfully deleted your post.");
    } else {
      alert("There has been an error. Please try again.");
    }
    navigate("/profile");
  };

  const handleMessage = async (event) => {
    event.preventDefault();
    const data = await createMessage(postId, token, message);
    if (data.success) {
      alert("Your message has been sent!");
    } else {
      alert("There has been an error. Please try again.");
    }
    navigate("/profile");
  };

  return (
    <div>
      {postsList.map((post) => {
        if (post._id === postId) {
          return (
            <div className="individual-post" key={post._id}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <p>
                <b>Price: </b>
                {post.price}
              </p>
              <h3>Seller: {post.author.username}</h3>
              <p>
                <b>Location: </b>
                {post.location}
              </p>
              {post.willDeliver ? (
                <p>Seller willing to deliver.</p>
              ) : (
                <p>Delivery not available.</p>
              )}
              {post.isAuthor ? (
                <div>
                  <button onClick={handleDelete}>Delete</button>
                </div>
              ) : (
                <form className="send-message-form" onSubmit={handleMessage}>
                  <label>Send Message to Seller:</label>
                  <br />
                  <textarea
                    rows="10"
                    cols="50"
                    placeholder="Write message here..."
                    onChange={(event) => setMessage(event.target.value)}
                  ></textarea>
                  <br />
                  <button type="submit">Send Message</button>
                </form>
              )}
            </div>
          );
        }
      })}
    </div>
  );
};

export default PostById;
