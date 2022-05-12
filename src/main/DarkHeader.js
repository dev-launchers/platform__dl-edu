import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs"
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import ScrollToTop from "../components/ScrollToTop";
import devLaunchersIcon from "../images/dev_launchers_rocket_small.png";
import classes from "./DarkHeader.module.css";
import { NavLink } from "react-router-dom";
import allyProps from "../components/tabhelpers/allyProps";
import { styled } from "@mui/material";

//override default mui styling
const cache = createCache({
  key: "css",
  prepend: true,
});

const onHomeClick = () => {
  setSelectedTab(null);
  ScrollToTop()
}

const NAVBARVALUES = [
  { index: 0, 
    title: "LEARN",
    path: "/main-content/legacy-learn/code",
  },
  { index: 1, 
    title: "CREATE",
    path: "/main-content/build",
  },
  { index: 2, 
    title: "ABOUT",
    path: "/about",
  },
];

const StyledTab = styled(Tab)({
  color: "white",
  '&.Mui-selected': {color: "white"},
  fontWeight: "bold",
});

const StyledTabs = styled(Tabs)({
  '&.MuiBox-root': {
    padding: "0px",
  },
  '&.MuiTabs-indicator': {
    left: "90px",
    width: "90px",
    background: "orange",}
})

const NavbarValues = NAVBARVALUES.map((tab) => {
  return (
    <StyledTab
      component={NavLink}
      label={tab.title}
      to={tab.path}
      value={tab.path}
      disableRipple
      {...allyProps(tab.index)}
      key={tab.index}
    />
  );
});


function DarkHeader() {
  const [selectedTab, setSelectedTab] = useState(null);

  const onTabChange = (e, newValue) => {
    setSelectedTab(newValue);
  };
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
              onClick={onHomeClick}
            >
              <img src={devLaunchersIcon} className={classes.rocketImage} />
              <Typography variant={"h6"} className={classes.basecampText}>
                DL Basecamp
              </Typography>
            </Box>
            <Box className={classes.dlContainer1}>
              <StyledTabs
                value={selectedTab}
                onChange={onTabChange}
                aria-label="module tabs"
                textColor={"inherit"}
                indicatorColor={"secondary"}
              >
                {NavbarValues}
              </StyledTabs>
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
