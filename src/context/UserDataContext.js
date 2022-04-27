import React from "react";
import constate from "constate"; // State Context Object Creator
import axios from "axios";

import { env } from "../utils/EnvironmentVariables";

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

// Built from this article: https://www.sitepoint.com/replace-redux-react-hooks-context-api/
// This allows userData to be accessed anywhere in the app
// Step 1: Create a custom hook that contains your state and actions
function useUserData() {
  const [userData, setUserData] = React.useState(DEFAULT_USER);

  React.useEffect(() => {
    // Setting timeout because of environment variable hack
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
      .catch((err) => {
        // setUserData({ id: "invalid" });
      });
  }, []);

  return { userData };
}

// Step 2: Declare your context state object to share the state with other components
const [UserDataProvider, useUserDataContext] = constate(useUserData);
export { UserDataProvider, useUserDataContext };