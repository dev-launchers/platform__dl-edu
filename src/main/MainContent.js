import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";

import FilteredLearningModule from "../modules/FilteredLearningModule";
import LearningModuleHome from "../modules/LearningModuleHome";
import LearningModuleList from "../modules/LearningModuleList";
import LegacyLearnList from "../legacyLearn/LegacyLearnList";
import ModuleBuilder from "../components/modulebuilder/ModuleBuilder";
import SideNav from "./SideNav";

const drawerWidth = 368;

function MainContent() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [filterKey, setFilterKey] = useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const filterHandler = (key) => {
    setFilterKey(key);
  };

  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      marginBottom: "350px",
      backgroundColor: "#181818",
      padding: theme.spacing(3),
      /* transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }), */
      marginLeft: `-${drawerWidth / 10}px`,
      marginBottom: "350px",
      backgroundColor: "#181818",
      ...(open && {
        /* transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }), */
        marginLeft: 0,
      }),
    })
  );
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex", width: "100%" }}>
        <SideNav
          theme={theme}
          checkOpen={open}
          handleOpen={handleDrawerOpen}
          handleClose={handleDrawerClose}
          onDifficultyWasSelected={filterHandler}
          onTagWasSelected={filterHandler}
        />
        <Main open={open}>
          <Routes>
            <Route path={`/legacy-learn/:tab/`} element={<LegacyLearnList />} />
            <Route path={`/learning-modules/:category`} element={<LearningModuleList />} />
            <Route path={`/learning-module/module-id=:moduleId`} element={<LearningModuleHome />} />
            <Route path={`/learning-module/filter-by=:filterKey`} element={<FilteredLearningModule filterKey={filterKey} />} />
            <Route path="/build/" element={<ModuleBuilder />} />
          </Routes>
        </Main>
      </Box>
    </>
  );
}

export default MainContent;
