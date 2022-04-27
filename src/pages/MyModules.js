import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import DifficultyButtons from "../components/sidenav/DifficultyButtons";
import FilterDropdownMenu from "../components/sidenav/FilterDropdownMenu";
// import FilterButton from "../components/sidenav/FilterButton";
import SearchBar from "../components/sidenav/SearchBar";
import TagContainer from "../components/sidenav/TagContainer";
import UserModuleList from "./UserModuleList";
import { useUserDataContext } from '../context/UserDataContext';

import classes from "./MyModules.module.css";


const MyModules = (props) => {
  const theme = useTheme();
  const { userData } = useUserDataContext();
  const [filterKey, setFilterKey] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const filterHandler = (key) => {
    setFilterKey(key);
  };

  useEffect(() => {
    if (userData.id === "invalid") setIsLoading(true);
    else setIsLoading(false);
  }, [isLoading])

  return (
    isLoading ? <p>Please log in to view your modules</p> :
    (
    <Box className={classes.myModulesContainer} sx={{
      backgroundColor: "#181818",
      color: "white"
    }}>
      <Box className={classes.myModulesInnerContainer}>
        <Box className={classes.myModulesHeader}>
          <p>Profile &gt; My Modules</p>
          <h1>My Modules</h1>
        </Box>

        <Box className={classes.filterAndModules}>
          <Box className={classes.filterBox}>
            <SearchBar handleTagWasSelected={filterHandler}/>
            <FilterDropdownMenu />
            <DifficultyButtons difficultyWasSelected={filterHandler}/>
            {/* <FilterButton /> */}
            <TagContainer handleTagWasSelected={filterHandler} />

          </Box>

          <Box className={classes.userModulesContainer}>
            <UserModuleList  ownerId={userData.id} />

          </Box>
        </Box>


      </Box>
    </Box>
    )
  )
}

export default MyModules;
