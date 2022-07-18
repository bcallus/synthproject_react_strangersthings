import React from "react";
import { useNavigate } from "react-router-dom";
import { createMessage, deletePost } from "../api";

const PostById = ({
  postsList,
  setPostsList,
  setPostId,
  postId,
  postById,
  setPostById,
  token,
  message,
  setMessage,
}) => {
  const navigate = useNavigate();
  //   console.log("postsList in PostById", postsList);
  //   console.log("postId in PostById", postId);
  //   console.log("postById state in PostById", postById);

  const handleDelete = async (event) => {
    event.preventDefault();
    // console.log("token in handleDelete", token)
    // console.log("postId in handleDelete", postId)
    const data = await deletePost(postId, token);
    // console.log("data from handleDelete", data)

    const filteredPostsList = postsList.filter((post) => post._id !== postId);
    // console.log("filteredPostsList", filteredPostsList)
    setPostsList(filteredPostsList);
    // console.log("postsList after delete", postsList)
    if (data.success) {
      alert("You have sucessfully deleted your post.")
    } else {
      alert("There has been an error. Please try again.")
    }
    navigate("/profile");
  };

  const handleMessage = async (event) => {
    event.preventDefault();
    console.log("message before api call", message);
    const data = await createMessage(postId, token, message);
    console.log("data returned from createMessage Api function", data)
    if (data.success) {
      alert("Your message has been sent!")
    } else {
      alert("There has been an error. Please try again.")
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
