import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import LearningModule from "../modules/LearningModule";
import LearningModuleList from "../modules/LearningModuleList";
import LegacyLearnList from "../legacyLearn/LegacyLearnList";
import SideNav from "./SideNav";

const drawerWidth = 368;

//if we adopt this approach, this logic will be necessary for all content we place within our "main" section
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    marginTop: "50px",
    paddingBottom: "2.5rem",
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    marginTop: "50px",
    paddingBottom: "2.5rem",
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

function MainContent() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.

  /*I ended up removing this useRouteMatch logic for now.  I'll reach out to Jack to try to figure out its purpose
  let { path, url } = useRouteMatch();*/

  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <SideNav
        theme={theme}
        checkOpen={open}
        handleOpen={handleDrawerOpen}
        handleClose={handleDrawerClose}
      />
      <Main open={open}>
        <Route path="/main-content/explore">
          <Container sx={{ height:"1000px" }}><Typography variant="h1">
            Check out what we have to offer!!
          </Typography></Container>
        </Route>
        <Route path={`/main-content/legacy-learn/:tab`}>
          <LegacyLearnList />
        </Route>
        <Route path={`/main-content/learning-modules/:category`}>
          <LearningModuleList />
        </Route>
        <Route path={`/main-content/learning-module/:moduleId`}>
          <LearningModule />
        </Route>
      </Main>
    </Box>
  );
}

export default MainContent;
