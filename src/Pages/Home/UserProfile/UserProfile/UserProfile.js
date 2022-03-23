import React from "react";
import { useParams } from "react-router-dom";
import UserProfileBanner from "../UserProfileBanner/UserProfileBanner";
import UserProfileHeader from "../UserProfileHeader/UserProfileHeader";
import UserProfileHome from "../UserProfileHome/UserProfileHome";


const UserProfile = () => {
  const email = useParams()
  return (
    <div style={{paddingLeft:"51px"}}>
      <UserProfileBanner />
      <UserProfileHeader email={email} />
      <UserProfileHome email={email}/>
    </div>
  );
};

export default UserProfile;
