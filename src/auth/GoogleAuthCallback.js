import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
   * @returns TODO.
   */
function GoogleAuthCallback() {
  const [userData, setUserData] = useState(DEFAULT_USER);
  useEffect(() => {

    axios({
      method: 'GET',
      url: `http://localhost:1337/users/me`,
      withCredentials: true,
    })
    .then(({ data: currentUser }) => {
      setUserData({
        id: currentUser.id,
        name: currentUser.displayName,
        username: currentUser.username,
        email: currentUser.email,
        bio: currentUser.bio,
        profilePictureUrl: currentUser.profilePictureUrl,
        socialMediaLinks: currentUser.socialMediaLinks,
        totalPoints: currentUser.totalPoints,
        totalSeasonPoints: currentUser.totalSeasonPoints,
        availablePoints: currentUser.availablePoints,
        volunteerHours: currentUser.volunteerHours,
        discord: currentUser.discord
      });
    })
    .catch(err => {
      //setUserData({ id: "invalid" });
    });

  }, [])

  return (
    <div>
        test
        {console.log(userData)}
        {console.log(userData.email)}
    </div>
  )
}

export default GoogleAuthCallback