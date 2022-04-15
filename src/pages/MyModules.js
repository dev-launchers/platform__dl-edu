import React, { useState } from "react";

import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import SideNav from "../main/SideNav";

import DifficultyButtons from "../components/sidenav/DifficultyButtons";
import FilterDropdownMenu from "../components/sidenav/FilterDropdownMenu";
/* import FilterButton from "../components/sidenav/FilterButton";
 */import SearchBar from "../components/sidenav/SearchBar";
import TagContainer from "../components/sidenav/TagContainer";

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
    <Box sx={{
      backgroundColor: "#181818",
      color: "white"
    }}>
      <Box>
        <p>Profile > My Modules</p>
        <h1>My Modules</h1>

      </Box>

      {/* <Box>
        <SideNav
          theme={theme}
          checkOpen={open}
          handleOpen={handleDrawerOpen}
          handleClose={handleDrawerClose}
          onDifficultyWasSelected={filterHandler}
          onTagWasSelected={filterHandler} />
      </Box> */}

      <Box sx={{
        width: 350,
        padding: 5,
        backgroundColor: "#262626",
        // height: "fit-content",
        // display: "flex",
        // flexDirection: "column",
        // alignItems: "center"
      }}>
        <SearchBar />
        <FilterDropdownMenu />
        <DifficultyButtons />
        <TagContainer/>
      </Box>
    </Box>
  )
}

export default MyModules;
