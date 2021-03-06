import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import { CssBaseline } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./SideNav.module.css";

import DifficultyButtons from "../components/sidenav/DifficultyButtons";
import FilterDropdownMenu from "../components/sidenav/FilterDropdownMenu";
import FilterButton from "../components/sidenav/FilterButton";
import SearchBar from "../components/sidenav/SearchBar";

const PREFIX = "SideNav";

const classes = {
  root: `${PREFIX}-root`,
  drawer: `${PREFIX}-drawer`,
  drawerPaper: `${PREFIX}-drawerPaper`,
  drawerContainer: `${PREFIX}-drawerContainer`,
  toolbar: `${PREFIX}-toolbar`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    minHeight: "1550px",
  },

  [`& .${classes.drawer}`]: {
    width: drawerWidth,
    flexShrink: 0,
    position: "sticky",
    backgroundColor: "#f2f2f2",
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
      position: "sticky",
      backgroundColor: "#f2f2f2",
    },
  },

  [`& .${classes.drawerPaper}`]: {
    width: drawerWidth,
  },

  [`& .${classes.drawerContainer}`]: {
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    padding: 0,
  },

  // necessary for content to be below app bar
  [`& .${classes.toolbar}`]: theme.mixins.toolbar,
}));

const drawerWidth = 325;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

// TODO better to store nav bar structure in JSON, and then load-and-loop, instead of repeating code
function SideNav(props) {
  const [openedLegacy, setOpenedLegacy] = useState(false);

  const handleDifficultyWasSelected = (event) => {
    const difficulty = event.target.text.toLowerCase();
    props.onDifficultyWasSelected(difficulty);
  };

  return (
    <>
      <CssBaseline />
      <Root className={classes.root}>
        {!props.checkOpen ? (
          <IconButton
            aria-label="open drawer"
            onClick={props.handleOpen}
            sx={{ mr: 2, ...(open && { height: "40px", width: "40px" }) }}
          >
            <MenuIcon />
          </IconButton>
        ) : null}
        {props.checkOpen ? (
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={props.checkOpen}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <DrawerHeader>
              <IconButton onClick={props.handleClose}>
                {props.theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <div className={classes.drawerContainer}>
              <SearchBar />
              <FilterDropdownMenu />
              <DifficultyButtons difficultyWasSelected={handleDifficultyWasSelected} />
              <FilterButton />
            </div>
          </Drawer>
        ) : null}
      </Root>
    </>
  );
}

export default SideNav;
