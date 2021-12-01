import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import rocketIcon from "../images/dev_launchers_rocket_small.png";
import classes from "./DarkHeader.module.css";
import { NavLink } from "react-router-dom";

//override default mui styling
const cache = createCache({
  key: "css",
  prepend: true,
});

function DarkHeader() {
  return (
    <>
      <CacheProvider value={cache}>
        <AppBar className={classes.appBar}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width:"80%"
            }}
          >
            <span className={classes.dlContainer1}>
               <img
                  src={rocketIcon}
                  alt="null"
                  className={classes.rocketIcon}
                />
                <Typography
                  variant="h3"
                  component={NavLink}
                  to={"/"}
                  className={classes.dev_launchers_title}
                >
                  DL Basecamp
                </Typography>
            </span>
            <span className={classes.dlContainer2}>
              <Link to="/home" component={Typography} variant={"h5"} className={classes.link} underline="none">
                  Home
              </Link>
              <Link to="/about" component={Typography} variant={"h5"} className={classes.link} underline="none">
                  About
              </Link>
              <Button
                className={classes.signinButton}
                size="small"
                color="primary"
                variant="contained"
              >
                Sign up
              </Button>
              <Button
                className={classes.loginButton}
                size="small"
                color="secondary"
                variant="contained"
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
