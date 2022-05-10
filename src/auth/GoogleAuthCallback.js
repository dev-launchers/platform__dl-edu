import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { env } from "../utils/EnvironmentVariables.js";

//User Data Model
const DEFAULT_USER = {
    id: 0,
    name: "",
    username: "",
    email: "",
    bio: "",
    profilePictureUrl: "",
    socialMediaLinks: [],
    totalPoints: 0,
    totalSeasonPoints: 0,
    availablePoints: 0,
    volunteerHours: 0,
    discord: {
      id: 0,
      avatar: "",
      username: "",
      discriminator: "",
    },
  };

  /**
   * Currently executes anytime "/users/me" or "/profile" is called from the backend. See App.js for Route triggers.
   * Code yoinked from UserDataContext in 'platform__website' repo.
   * @TODO Should probably implement this code similar to to how it's done in UserDataContext.js, Signup.js and UserProfiles.js. Currently there is no return, which is probably necessary for global access to logged in user data.
   * @TODO url param needs to be set using an environmet variable, see EnvironmentVariables.js in 'platform__website'.
   * @returns TODO.
   */
function GoogleAuthCallback() {

  const [userData, setUserData] = useState(DEFAULT_USER);

  useEffect(() => {

    axios({
      method: 'GET',
      url: env().API_URL + "/users/me",
      withCredentials: true,
    })
    .then(({ data: currentUser }) => {
      setUserData({
        id: currentUser.id,
        name: currentUser.profile.displayName,
        username: currentUser.username,
        email: currentUser.email,
        bio: currentUser.profile.bio,
        zipCode: currentUser.zipCode,
        profilePictureUrl: currentUser.profilePictureUrl,
        socialMediaLinks: currentUser.socialMediaLinks,
        totalPoints: currentUser.totalPoints,
        totalSeasonPoints: currentUser.totalSeasonPoints,
        availablePoints: currentUser.availablePoints,
        volunteerHours: currentUser.volunteerHours,
        discordId: currentUser.discordId
      });
    })
    .catch(err => {
      //setUserData({ id: "invalid" });
    });

  }, [])

  return (

    <div>
      {console.log(userData)}
      <div>Name: {userData.name}</div>
      <div>Username: {userData.username}</div>
      <div>Email: {userData.email}</div>
      <div>DiscordID: {userData.discordId}</div>
      <div>Bio: {userData.bio}</div>
      <div>Zip: {userData.zipCode}</div>
    </div>

  )
}

export default GoogleAuthCallback