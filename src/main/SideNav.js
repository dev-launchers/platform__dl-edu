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
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import cakeImage from "../images/cake.svg";
import "./SideNav.module.css";

const PREFIX = "SideNav";

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
  },

  [`& .${classes.drawer}`]: {
    width: drawerWidth,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
    },
  },

  [`& .${classes.drawerPaper}`]: {
    width: drawerWidth,
  },

  [`& .${classes.drawerContainer}`]: {
    overflow: "auto",
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

const drawerWidth = 270;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginTop:"50px",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

/* const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
})); */

// TODO better to store nav bar structure in JSON, and then load-and-loop, instead of repeating code
function SideNav(props) {
  const [openedLegacy, setOpenedLegacy] = useState(false);
  const [openedProgLang, setOpenedProgLang] = useState(false);
  const [openedFrameworks, setOpenedFrameworks] = useState(false);
  const [openedProgPrinc, setOpenedProgPrinc] = useState(false);

  const handleClickLegacy = () => {
    setOpenedLegacy(!openedLegacy);
  };

  const handleClickProgLang = () => {
    setOpenedProgLang(!openedProgLang);
  };

  const handleClickFrameworks = () => {
    setOpenedFrameworks(!openedFrameworks);
  };

  const handleClickProgPrinc = () => {
    setOpenedProgPrinc(!openedProgPrinc);
  };

  return (
        <Root className={classes.root}>
        <IconButton
          aria-label="open drawer"
          onClick={props.handleOpen}
          sx={{ mr: 2, ...(open && { height:"40px", width:"40px" }) }}
        >
          <MenuIcon />
        </IconButton>
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
            <IconButton onClick={props.handleClose} sx= {{ marginTop: "10px" }}>
              {props.theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <div className={classes.drawerContainer}>
            <div className={classes.toolbarHeader}>
              <div>
                <img src={cakeImage} />
              </div>
              <TextField
                id="search-content"
                variant="filled"
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Search />
                    </InputAdornment>
                  ),
                }}
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
                    to="/main/legacy-learn/code"
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
                    to="/main/legacy-learn/design"
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
                    to="/main/legacy-learn/phaser 3"
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
                    to="/main/legacy-learn/react"
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
              <ListItem button onClick={handleClickProgLang}>
                <ListItemText>Programming Languages</ListItemText>
                {openedProgLang ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openedProgLang} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <NavLink
                    to="/main/learning-modules/javascript"
                    activeClassName={classes.activeLink}
                  >
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText>JavaScript</ListItemText>
                    </ListItem>
                  </NavLink>
                  <NavLink
                    to="/main/learning-modules/java"
                    activeClassName={classes.activeLink}
                  >
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText>Java</ListItemText>
                    </ListItem>
                  </NavLink>
                  <NavLink
                    to="/main/learning-modules/csharp"
                    activeClassName={classes.activeLink}
                  >
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText>C#</ListItemText>
                    </ListItem>
                  </NavLink>
                </List>
              </Collapse>
              <ListItem button onClick={handleClickFrameworks}>
                <ListItemText>Frameworks</ListItemText>
                {openedFrameworks ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openedFrameworks} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <NavLink
                    to="/main/TODO1"
                    activeClassName={classes.activeLink}
                  >
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText>TODO</ListItemText>
                    </ListItem>
                  </NavLink>
                </List>
              </Collapse>
              <ListItem button onClick={handleClickProgPrinc}>
                <ListItemText>Programming Principles</ListItemText>
                {openedProgPrinc ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openedProgPrinc} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <NavLink
                    to="/main/TODO2"
                    activeClassName={classes.activeLink}
                  >
                    <ListItem button className={classes.nested}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText>TODO</ListItemText>
                    </ListItem>
                  </NavLink>
                </List>
              </Collapse>
            </List>
          </div>
        </Drawer></Root>
  );
}

export default SideNav;
