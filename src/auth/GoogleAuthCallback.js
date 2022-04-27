import React, { useState, useEffect } from 'react';
import constate from "constate"; // State Context Object Creator
import axios from 'axios';
import { useUserDataContext } from '../context/UserDataContext.js';

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
   * This component triggers Google Authentication and stores it in the userDataContext.
   * For now, it displays a logged in message and some userData information.
   */
function GoogleAuthCallback() {
  const { userData } = useUserDataContext();

  return (

    <div>
      <h1>You're logged in!</h1>
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
