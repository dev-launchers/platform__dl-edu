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

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    marginTop: "50px",
    marginBottom:"411px",
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth/10}px`,
    marginTop: "50px",
    marginBottom:"411px",
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
          <h1>foo</h1>
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
