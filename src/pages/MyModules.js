import React, { useState } from "react";

import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import SideNav from "../main/SideNav";

import DifficultyButtons from "../components/sidenav/DifficultyButtons";
import FilterDropdownMenu from "../components/sidenav/FilterDropdownMenu";
import FilterButton from "../components/sidenav/FilterButton";
import SearchBar from "../components/sidenav/SearchBar";
import TagContainer from "../components/sidenav/TagContainer";

import classes from "./MyModules.module.css";


const MyModules = (props) => {
  // const theme = useTheme();
  // const [open, setOpen] = useState(true);
  // const [filterKey, setFilterKey] = useState("");

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  // const filterHandler = (key) => {
  //   setFilterKey(key);
  // };

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

        <Box className={classes.filterBox}>
          <SearchBar />
          <FilterDropdownMenu />
          <DifficultyButtons />
          <FilterButton />
          <TagContainer/>

        </Box>


      </Box>
    </Box>
  )
}

export default MyModules;
