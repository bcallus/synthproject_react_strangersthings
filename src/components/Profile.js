import React, { useEffect } from "react";
import { getUserProfile } from "../api";

const Profile = ({
  token,
  username,
  userPosts,
  userMessages,
  setUserPosts,
  setUserMessages,
}) => {
  useEffect(() => {
    async function fetchMyProfile() {
      let data = await getUserProfile({ token });
      setUserPosts(data.data.posts);
      setUserMessages(data.data.messages);
    }
    fetchMyProfile();
  }, []);

  return (
    <div>
      <h1 className="profile-header">Welcome to your profile, {username}.</h1>
      <h2 className="profile-title-section">Your Posts:</h2>
      {userPosts.map((userPost) => {
        return (
          <div className="messages" key={userPost._id}>
            <h3>{userPost.title}</h3>
            <p>{userPost.description}</p>
            <p>
              <b>Price: </b>
              {userPost.price}
            </p>
            {userPost.willDeliver ? (
              <p>Seller willing to deliver.</p>
            ) : (
              <p>Delivery not available.</p>
            )}
            {userPost.active ? (
              <p>
                <b>This post is currently active.</b>
              </p>
            ) : (
              <p>
                <b>This post has been deleted and is not currently active.</b>
              </p>
            )}
            {userPost.messages
              ? userPost.messages.map((message) => {
                  return (
                    <div className="inbox-message" key={message._id}>
                      <p className="inbox-message-bold">
                        <b>Message Received for this Post:</b>
                      </p>
                      <p>{message.content}</p>
                    </div>
                  );
                })
              : null}
          </div>
        );
      })}
      <h2 className="profile-title-section">Messages Sent By Me:</h2>
      {userMessages.map((message) => {
        return (
          <div className="messages" key={message._id}>
            <h3>Post Title: {message.post.title}</h3>
            <p>
              <b>Message Sent: </b>
              {message.content}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
