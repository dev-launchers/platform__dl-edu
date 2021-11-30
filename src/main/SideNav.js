import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import StarBorder from "@mui/icons-material/StarBorder";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Search from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import cakeImage from "../images/cake.svg";
import FilterDropdown from "../components/FilterDropdown";
import "./SideNav.module.css";

const PREFIX = "SideNav";

const languageFilterDescriptions = [
  { name: "Javascript", link: "/main-content/learning-modules/javascript" },
  { name: "Java", link: "/main-content/learning-modules/java" },
  { name: "C#", link: "/main-content/learning-modules/csharp" },
];
const frameworkFilterDescriptions = [
  { name: "Foo", link: "/main-content/learning-modules/javascript" },
  { name: "Roh", link: "/main-content/learning-modules/java" },
  { name: "Bar", link: "/main-content/learning-modules/csharp" },
];
const progressFilterDescriptions = [
  { name: "alpha", link: "/main-content/learning-modules/javascript" },
  { name: "beta", link: "/main-content/learning-modules/java" },
  { name: "gamma", link: "/main-content/learning-modules/csharp" },
];

const classes = {
  root: `${PREFIX}-root`,
  drawer: `${PREFIX}-drawer`,
  drawerPaper: `${PREFIX}-drawerPaper`,
  drawerContainer: `${PREFIX}-drawerContainer`,
  toolbar: `${PREFIX}-toolbar`,
  content: `${PREFIX}-content`,
  nested: `${PREFIX}-nested`,
  toolbarHeader: `${PREFIX}-toolbarHeader`,
  active: `${PREFIX}-active`,
  activeLink: `${PREFIX}-activeLink`,
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

  [`& .${classes.content}`]: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  [`& .${classes.nested}`]: {
    paddingLeft: theme.spacing(4),
  },

  [`& .${classes.toolbarHeader}`]: {
    height: "20em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },

  [`& .${classes.activeLink} > div`]: {
    backgroundColor: "#3a7ca524",
  },
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

  //override default mui styling
  const cache = createCache({
    key: "css",
    prepend: true,
  });
  return (
    <CacheProvider value={cache}>
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
              <div className={classes.toolbarHeader}>
                
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
                  sx={{ paddingBottom: "5px" }}
                />
              </div>
              <Divider />
              <List>
                <ListItem button onClick={handleClickLegacy}>
                  <ListItemText>DL Learn</ListItemText>
                  {openedLegacy ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openedLegacy} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <NavLink
                      to="/main-content/legacy-learn/code"
                      activeClassName={classes.activeLink}
                    >
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText>Code</ListItemText>
                      </ListItem>
                    </NavLink>
                    <NavLink
                      to="/main-content/legacy-learn/design"
                      activeClassName={classes.activeLink}
                    >
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText>Design</ListItemText>
                      </ListItem>
                    </NavLink>
                    <NavLink
                      to="/main-content/legacy-learn/phaser 3"
                      activeClassName={classes.activeLink}
                    >
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText>Phaser</ListItemText>
                      </ListItem>
                    </NavLink>
                    <NavLink
                      to="/main-content/legacy-learn/react"
                      activeClassName={classes.activeLink}
                    >
                      <ListItem button className={classes.nested}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText>React</ListItemText>
                      </ListItem>
                    </NavLink>
                  </List>
                </Collapse>
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
              </List>
              <Container sx={{ width:"100%", display:"flex", justifyContent:"center", height:"80px" }}><Button variant="contained" color="lightGray" size="large" sx={{ width:"80%" }}>Filter</Button></Container>
            </div>
          </Drawer>
        ) : null}
      </Root>
    </CacheProvider>
  );
}

export default SideNav;
