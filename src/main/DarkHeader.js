import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import ScrollToTop from "../components/ScrollToTop";
import devLaunchersIcon from "../images/dev_launchers_rocket_small.png";
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
            className={classes.toolbarContainer}
          >
            <Box
              component={NavLink}
              to="/"
              className={classes.basecampContainer}
              onClick={ScrollToTop}
            >
              <img src={devLaunchersIcon} className={classes.rocketImage} />
              <Typography variant="h6" className={classes.basecampText}>
                DL Basecamp
              </Typography>
            </Box>
            <Box className={classes.dlContainer1}>
              <Link
                component={NavLink}
                to="/main-content/legacy-learn/code"
                variant={"h6"}
                className={classes.link}
                underline="none"
              >
                Learn
              </Link>
              <Link
                component={NavLink}
                to="/main-content/build"
                variant={"h6"}
                className={classes.link}
                underline="none"
              >
                Create
              </Link>
              <Link
                component={NavLink}
                to="/about"
                variant={"h6"}
                className={classes.link}
                underline="none"
              >
                About
              </Link>
              <Button
                className={classes.signupButton}
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
                onClick={() =>
                  (window.location = 'http://localhost:1337/connect/google')
                }
              >
                Login
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </CacheProvider>
    </>
  );
}

export default DarkHeader;
