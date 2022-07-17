import React, { useEffect } from "react";
import { getUserProfile } from "../api";

const Profile = ({ token, username, userPosts, userMessages, setUserPosts, setUserMessages, inboxMessages, setInboxMessages }) => {
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

  console.log("inbox messages from Profile.js", inboxMessages)

  userPosts.map(userPost => {
    if (userPost.messages.length > 0) {
      console.log("userPost.messages", userPost.messages)
      const inboxMessages = userPost.messages
      console.log("inboxMessages", inboxMessages)
      inboxMessages.map(message => {
      console.log(message.content)
      })
    }
  })

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
      {userPosts.map(userPost => {
    if (userPost.messages.length > 0) {
      console.log("userPost.messages", userPost.messages)
      const inboxMessages = userPost.messages
      console.log("inboxMessages", inboxMessages)
      inboxMessages.map(message => {
        return (
          <div>
            {console.log(message.content)}
            <h2>{message.content}</h2>
          </div>
        )
      })
    }
      })}
      <h2>test</h2>
    </div>
  );
};

export default Profile;
