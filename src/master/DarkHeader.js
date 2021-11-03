import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import rocketIcon from "../images/dev_launchers_rocket_small.png";
import classes from "./DarkHeader.module.css";

function DarkHeader() {
  const cache = createCache({
    key: "css",
    prepend: true,
  });

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
            <span className={classes.dlContainer1}>
              <img src={rocketIcon} alt="null" className={classes.rocketIcon} />
              <Typography variant="h3" className={classes.dev_launchers_title}>
                DL Basecamp
              </Typography>
            </span>
            <Breadcrumbs aria-label="breadcrumb" separator=" ">
              <Link to="/home" className={classes.link} underline="hover">
                Home
              </Link>
              <Link to="/about" className={classes.link} underline="hover">
                About
              </Link>
            </Breadcrumbs>

            <span className={classes.dlContainer2}>
              <Button className={classes.signUpButton}>Sign up</Button>
              <Button className={classes.loginButton}>Login</Button>
            </span>
          </Toolbar>
        </AppBar>
      </CacheProvider>
    </>
  );
}

export default DarkHeader;
