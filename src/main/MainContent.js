import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Route, useRouteMatch } from "react-router-dom";
import Box from "@mui/material/Box";

import LearningModule from "../modules/LearningModule";
import LearningModuleList from "../modules/LearningModuleList";
import LegacyLearnList from "../legacyLearn/LegacyLearnList";
import SideNav from "./SideNav";

const PREFIX = "MainContent";
const drawerWidth = 240;

//if we adopt this approach, this logic will be necessary for all content we place within our "main" section
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const classes = {
  root: `${PREFIX}-root`,
  content: `${PREFIX}-content`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    display: "flex",
  },

  [`& .${classes.content}`]: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
}));

function MainContent() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display:"flex" }}>
      <SideNav
        theme={theme}
        checkOpen={open}
        handleOpen={handleDrawerOpen}
        handleClose={handleDrawerClose}
      />
      <Main open={open} >
        <Route path={`${path}/legacy-learn/:tab`}>
          <LegacyLearnList />
        </Route>
        <Route path={`${path}/learning-modules/:category`}>
          <LearningModuleList />
        </Route>
        <Route path={`${path}/learning-module/:moduleId`}>
          <LearningModule />
        </Route>
      </Main>
    </Box>
  );
}

export default MainContent;
