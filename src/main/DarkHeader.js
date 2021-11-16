import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import rocketIcon from "../images/dev_launchers_rocket_small.png";
import classes from "./DarkHeader.module.css";

//override default mui styling
const cache = createCache({
  key: "css",
  prepend: true,
});

function DarkHeader(props) {
  return (
    <>
      <CacheProvider value={cache}>
        <AppBar className={classes.appBar}>
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {props.checkIsOpen ? (
              <Button onClick={props.userToggledMenu} >
                <MenuIcon sx={{ color:"#ffffff", width:"25px", height:"25px"}} />
              </Button>
            ) : (
              <Button onClick={props.userToggledMenu} >
                <ArrowBackIosIcon sx={{ color:"#ffffff", width:"25px", height:"25px"}} />
              </Button>
            )}
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
      </CacheProvider>
    </>
  );
}

export default DarkHeader;
