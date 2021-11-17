/*Got the drawer logic from https://mui.com/components/drawers/#responsive-drawer if you have any questions about how I coded this!!! */
import React, { useState } from "react";
import MuiAppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import createCache from "@emotion/cache";
import { Link } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import SideNav from "./SideNav";
import rocketIcon from "../images/dev_launchers_rocket_small.png";
import classes from "./DarkHeader.module.css";

//override default mui styling
const cache = createCache({
  key: "css",
  prepend: true,
});

const drawerWidth = 240;

//if we adopt this approach, this logic will be necessary for all content we place within our "main" section
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

//creates header
const AppBar = styled(MuiAppBar, {
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
}));

function HeaderAndDrawer(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: "#222222" }} position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <span className={classes.dlContainer1}>
            <img src={rocketIcon} alt="null" className={classes.rocketIcon} />
            <Typography variant="h3" className={classes.dev_launchers_title}>
              DL Basecamp
            </Typography>
          </span>
          <span className={classes.dlContainer2}>
            <Link to="/home" className={classes.link} underline="none">
              <Typography variant="h5" className={classes.linkText}>
                Home
              </Typography>
            </Link>
            <Link to="/about" className={classes.link} underline="none">
              <Typography variant="h5" className={classes.linkText}>
                About
              </Typography>
            </Link>
          </span>
          <span className={classes.dlContainer3}>
            <Button
              className={classes.signinButton}
              size="small"
              color="primary"
              variant="contained"
              component={Link}
              to="/sign-up"
            >
              Sign up
            </Button>
            <Button
              className={classes.loginButton}
              size="small"
              color="secondary"
              variant="contained"
              component={Link}
              to="/login"
            >
              Login
            </Button>
          </span>
        </Toolbar>
      </AppBar>
      <SideNav theme={theme} onOpen={open} handleClose={handleDrawerClose} />
    </Box>
  );
}

export default HeaderAndDrawer;
