import React, { useEffect } from "react";
import { getUserProfile } from "../api";

const Profile = ({ token, username }) => {
  useEffect(() => {
    async function fetchMyProfile() {
      let data = await getUserProfile({ token });
      console.log("getUserProfile data", data)
        console.log("user posts", data.data.posts);
        console.log("user messages", data.data.messages);
    }
    fetchMyProfile();
  }, [token]);

  return (
    <div>
      <h2>Welcome {username}!</h2>
    </div>
  );
};

export default Profile;
