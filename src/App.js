import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Redirect } from "react-router-dom";
import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";

import DarkLearnSection from "./home/DarkLearnSection";
import DarkBanner from "./home/DarkBanner";
import DarkHeader from "./main/DarkHeader";
import DarkFooter from "./main/DarkFooter";
import MainContent from "./main/MainContent";
import Create from "./home/Create";
import Challenge from "./home/Challenge";

import "./styles.css";
import classes from "./App.module.css";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter"].join(","),
    },
    palette: {
      primary: {
        main: "#3a7ca5",
      },
      secondary: {
        main: "#ff7f0e",
        contrastText: "#ffffff",
      },
      neutral: {
        main: "#ffffff",
        contrastText: "#666666",
      },
      dark: {
        main: "#222222",
        contrastText: "#ffffff",
      },
      gray: {
        main: "#c4c4c4",
        contrastText: "#222222",
      },
      lightGray: {
        main: "#d8d8d8",
        contrastText: "#222222",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={classes.appWrapper}>
        <DarkHeader />
        <Route exact path="/">
          <Box className={classes.homeComponentsWrapper}>
            <DarkBanner />
            <DarkLearnSection />
            <Create />
            <Challenge />
          </Box>
        </Route>
        <Route path="/main-content">
          <MainContent />
        </Route>
        <DarkFooter />
      </Box>
    </ThemeProvider>
  );
}

export default App;
