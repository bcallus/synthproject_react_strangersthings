import React, { useEffect } from "react";
import { getUserProfile } from "../api";

const Profile = ({ token, username, userPosts, userMessages, setUserPosts, setUserMessages }) => {
  useEffect(() => {
    async function fetchMyProfile() {
      let data = await getUserProfile({ token });
        console.log("getUserProfile data", data)
        setUserPosts(data.data.posts)
        console.log("user posts", userPosts);
        setUserMessages(data.data.messages)
        console.log("user messages", userMessages);
    }
    fetchMyProfile();
  }, []); //hover over squiggle. what does it mean?

    //map over posts and messages once there are some in the data
  return (
    <div>
          <h2>Welcome {username}!</h2>
          <h2>Your Posts</h2>
          <h2>Your Messages</h2>
    </div>
  );
};

export default Profile;
