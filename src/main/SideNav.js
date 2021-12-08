import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Search from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FilterDropdown from "../components/FilterDropdown";
import "./SideNav.module.css";

const languageFilterDescriptions = [
  {
    id: "0",
    name: "Javascript",
    link: "/main-content/learning-modules/javascript",
  },
  { id: "1", name: "Java", link: "/main-content/learning-modules/java" },
  { id: "2", name: "C#", link: "/main-content/learning-modules/csharp" },
];
const frameworkFilterDescriptions = [
  { id: "3", name: "Foo", link: "/main-content/learning-modules/javascript" },
  { id: "4", name: "Roh", link: "/main-content/learning-modules/java" },
  { id: "5", name: "Bar", link: "/main-content/learning-modules/csharp" },
  { id: "6", name: "Bar", link: "/main-content/learning-modules/csharp" },
];
const progressFilterDescriptions = [
  { id: "7", name: "alpha", link: "/main-content/learning-modules/javascript" },
  { id: "8", name: "beta", link: "/main-content/learning-modules/java" },
  { id: "9", name: "gamma", link: "/main-content/learning-modules/csharp" },
];
const dlLearnFilterDescriptions = [
  { id: "10", name: "Code", link: "/main-content/legacy-learn/code" },
  { id: "11", name: "Design", link: "/main-content/legacy-learn/design" },
  { id: "12", name: "Phaser", link: "/main-content/learning-modules/phaser 3" },
  { id: "13", name: "React", link: "/main-content/learning-modules/react" },
];

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

  const handleClickLegacy = () => {
    setOpenedLegacy(!openedLegacy);
  };

  return (

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
              <Container sx={{ width: "100%", alignItems: "center" }}>
                <TextField
                  id="filled-basic"
                  label="Search"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Search />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    mt: "5px",
                    paddingBottom: "5px",
                    width: "90%",
                    alignItems: "center",
                  }}
                />
              </Container>
              <List
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  height: "450px",
                }}
              >
                <FilterDropdown
                  filterTitle="DL Learn"
                  filterObjects={dlLearnFilterDescriptions}
                />
                <FilterDropdown
                  filterTitle="Language"
                  filterObjects={languageFilterDescriptions}
                />
                <FilterDropdown
                  filterTitle="Framework"
                  filterObjects={frameworkFilterDescriptions}
                />
                <FilterDropdown
                  filterTitle="Progress"
                  filterObjects={progressFilterDescriptions}
                />
              </List>
              <List component="div" disablePadding>
                <ListItem>Difficulty</ListItem>
                <ListItem
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    variant="contained"
                    color="gray"
                    size="small"
                    component={NavLink}
                    to="/main-content/learning-module/filter-by=beginner"
                    onClick={() => {
                      props.onDifficultyWasSelected("beginner");
                    }}
                  >
                    Beginner
                  </Button>
                  <Button
                    variant="contained"
                    color="gray"
                    size="small"
                    component={NavLink}
                    to="/main-content/learning-module/filter-by=intermediate"
                    onClick={() => {
                      props.onDifficultyWasSelected("intermediate");
                    }}
                  >
                    Intermediate
                  </Button>
                  <Button
                    variant="contained"
                    color="gray"
                    size="small"
                    component={NavLink}
                    to="/main-content/learning-module/filter-by=advanced"
                    onClick={() => {
                      props.onDifficultyWasSelected("advanced");
                    }}
                  >
                    Advanced
                  </Button>
                </ListItem>
              </List>
              <Container
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  height: "70px",
                }}
              >
                <Button
                  variant="contained"
                  color="lightGray"
                  size="large"
                  sx={{ width: "80%", mt: "10px" }}
                >
                  Filter
                </Button>
              </Container>
            </div>
          </Drawer>
        ) : null}
      </Root>
  );
}

export default SideNav;
