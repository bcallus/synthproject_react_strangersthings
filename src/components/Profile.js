import React, { useEffect } from "react";
import { getUserProfile } from "../api";

const Profile = ({ token, username, userPosts, userMessages, setUserPosts, setUserMessages, inboxMessages, setInboxMessages }) => {
  useEffect(() => {
    async function fetchMyProfile() {
      let data = await getUserProfile({ token });
        console.log("getUserProfile data", data)
        setUserPosts(data.data.posts)
        console.log("user posts from Profile.js", userPosts);
      setUserMessages(data.data.messages)
      console.log("inbox messages from Profile.js", data.data.posts)
      data.data.posts.map(post => {
        return (
          setInboxMessages(post.messages)
        )
      })

    }
    fetchMyProfile();
  }, []); //hover over squiggle. what does it mean?

    //map over posts and messages once there are some in the data
  return (
    <div>
      <h1>Welcome {username}!</h1>
      <h2>Your Posts</h2>
      <h2>Messages Sent By Me</h2>
      {userMessages.map(message => {
        return (
          <div className="messages" key={message._id}>
            <h3>Post Title: {message.post.title}</h3>
            <p><b>Message Sent: </b>{message.content}</p>
            </div>
        )
      })}
      <h2>Messages Sent To Me</h2>
      {inboxMessages.map(message => {
        return (
          <div className="messages" key={message._id}>
            {/* <h3>Post Title: {userPosts.title}</h3> */}
            <p><b>Message Sent: </b>{message.content}</p>
          </div>
        )
      })}
    </div>
  );
};

export default Profile;
