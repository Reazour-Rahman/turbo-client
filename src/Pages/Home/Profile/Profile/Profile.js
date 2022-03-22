import React from "react";
import ProfileBanner from "../ProfileBanner/ProfileBanner";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import ProfileHome from "../ProfileHome/ProfileHome";

const Profile = () => {
  return (
    <div style={{paddingLeft:"51px"}}>
      <ProfileBanner />
      <ProfileHeader />
      <ProfileHome />
    </div>
  );
};

export default Profile;
