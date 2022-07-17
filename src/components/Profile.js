import React, { useEffect } from "react";
import { getUserProfile } from "../api";

const Profile = ({ token, username, userPosts, userMessages, setUserPosts, setUserMessages,}) => {
  useEffect(() => {
    async function fetchMyProfile() {
      let data = await getUserProfile({ token });
        console.log("getUserProfile data", data)
        setUserPosts(data.data.posts)
        console.log("userPosts from Profile.js", userPosts);
      setUserMessages(data.data.messages)
    }
    fetchMyProfile();
  }, []); //hover over squiggle. what does it mean?

 
  return (
    <div>
      <h1>Welcome {username}!</h1>
      <h2>Your Posts</h2>
      {userPosts.map(userPost => {
        return (
          <div className="messages" key={userPost._id}>
            <h3>{userPost.title}</h3>
            <p>{userPost.description}</p>
            <p><b>Price: </b>{userPost.price}</p>
            {userPost.willDeliver ? <p>Seller willing to deliver.</p> : <p>Delivery not available.</p>}
            {userPost.active ? <p><b>This post is currently active.</b></p> : <p><b>This post has been deleted and is not currently active.</b></p>}
            {userPost.messages ? userPost.messages.map(message => {
              return (
                <div className="inbox-message" key={message._id}>
                  <p><b>Message Received for this Post:</b></p>
                  <p>{message.content}</p>
                </div>
              )
            }) : null}
          </div>
        )
      })}
      <h2>Messages Sent By Me</h2>
      {userMessages.map(message => {
        return (
          <div className="messages" key={message._id}>
            <h3>Post Title: {message.post.title}</h3>
            <p><b>Message Sent: </b>{message.content}</p>
            </div>
        )
      })}
    </div>
  );
};

export default Profile;
