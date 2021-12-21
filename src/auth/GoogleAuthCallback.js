import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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

function GoogleAuthCallback() {
  console.log('here');

  //   const [userData, setUserData] = useState(DEFAULT_USER);

  //   useEffect(() => {
  //       // Setting timeout because of environment variable hack
  //       axios(`http://localhost:1337/users/current`, {
  //         withCredentials: true,
  //       })
  //         .then(({ data: currentUser }) => {
  //           setUserData({
  //             id: currentUser.id,
  //             name: currentUser.profile.displayName,
  //             username: currentUser.username,
  //             email: currentUser.email,
  //             bio: currentUser.profile.bio,
  //             profilePictureUrl: currentUser.profile.profilePictureUrl,
  //             socialMediaLinks: currentUser.profile.socialMediaLinks,
  //             totalPoints: currentUser.point.totalPoints,
  //             totalSeasonPoints: currentUser.point.totalSeasonPoints,
  //             availablePoints: currentUser.point.availablePoints,
  //             volunteerHours: currentUser.point.volunteerHours,
  //           });
  //         })
  //         .catch(() => {
  //           // setUserData({ id: "invalid" });
  //         });
  //     }, []);

  //     console.log(userData);

//     const { data } = await axios.get('http://localhost:1337/users/me', {
//         headers: {
//             Authorization:
//             'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTc2OTM4MTUwLCJleHAiOjE1Nzk1MzAxNTB9.UgsjjXkAZ-anD257BF7y1hbjuY3ogNceKfTAQtzDEsU',
//         },
//     });

// console.log(data);
    
    // axios
    //     .get('http://localhost:1337/users/me', {
    //         headers: {
    //             Authorization:
    //             'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImMxODkyZWI0OWQ3ZWY5YWRmOGIyZTE0YzA1Y2EwZDAzMjcxNGEyMzciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMTY0MTMxMzE1NDI5LWhjbGxidHJxNzdqc2M3YjNmcXZpYWs3MTQ4aGo4b2E5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMTY0MTMxMzE1NDI5LWhjbGxidHJxNzdqc2M3YjNmcXZpYWs3MTQ4aGo4b2E5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAwMTA1MDExNTc2MDcxMDExMDIxIiwiaGQiOiJkZXZsYXVuY2hlcnMuY29tIiwiZW1haWwiOiJjaHJpc3RpYW5zZWdvdGFAZGV2bGF1bmNoZXJzLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiY3UtOXpVM1pJeWpCX0RIVTFuMWY3USIsImlhdCI6MTYzOTYxMTQ4MSwiZXhwIjoxNjM5NjE1MDgxfQ.Vfv_5_mPgIwkemWju2fMSqxY5Ym_3-m9IAyGnBbjyLRuukJHThO_H53iNZp-WTofq_HlCd7rp_ixSQ26FgAu1lpoFLIFedk8GUzMkFqQtWNTakZ3sEhk4iOREFwGOZVFqL8hDG8arAi523SEt2p70zkO8vIE6dX1RGjzvaIpjheC2_2wAgjcCxvrwxhY_UgNTc_ih999ng91pil1nIO-rQWo9fBwd4OEsjhFPo20ahJLoi9KUaZ_cOSapZ58RW3O4RKRJIFwwI_1eLwUGp0tZvTTgQNf6HgaMy9-UTYLjw97aaX0QkM0x5O9crDc2W7FjuJptHUt2f6eK0WXWn5rPg',
    //         },
    //     })
    //     .then(responce => {
    //         console.log('User profile', response.data.user);
    //         console.log('User token', response.data.jwt);
    //     })
    //     .catch(error => {
    //         console.log('An error occurred:', error.response);
    //     })


// ORIGINAL
  const [auth, setAuth] = useState()
  const location = useLocation()
  useEffect(() => {
    if (!location) {
      return
    }
    const { search } = location
    axios({
      method: 'GET',
      url: `http://localhost:1337/auth/google/callback?${search}`,
    })
      .then((res) => res.data)
      .then(setAuth)
  }, [location])

  return (
    <div>
        test
      {/* {auth && (
        <>
          <div>Jwt: {auth.jwt}</div>
          <div>User Id: {auth.user.id}</div>
          <div>Provider: {auth.user.provider}</div>
        </>
      )} */}
    </div>
  )
}

export default GoogleAuthCallback