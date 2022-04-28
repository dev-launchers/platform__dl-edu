import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import UserModuleList from "./UserModuleList";
import { useUserDataContext } from '../context/UserDataContext';

import classes from "./MyModules.module.css";


const MyModules = (props) => {
  const theme = useTheme();
  const { userData } = useUserDataContext();
  const [filterKey, setFilterKey] = useState("");
  // const [isLoading, setIsLoading] = useState(true);

  const filterHandler = (key) => {
    setFilterKey(key);
  };



  return (

    <Box className={classes.myModulesContainer} sx={{
      backgroundColor: "#181818",
      color: "white"
    }}>
      <Box className={classes.myModulesInnerContainer}>
        <Box className={classes.myModulesHeader}>
          <p>Profile &gt; My Modules</p>
          <h1>My Modules</h1>
        </Box>

        <Box className={classes.userModulesContainer}>
          <UserModuleList  ownerId={userData.id} />

        </Box>


      </Box>
    </Box>
  )
}

export default MyModules;
