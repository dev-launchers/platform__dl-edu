import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Switch, Route, Redirect } from "react-router-dom";
import Box from "@mui/material/Box";

import DarkLearnSection from "./home/DarkLearnSection";
import DarkBanner from "./home/DarkBanner";
import DarkHeader from "./main/DarkHeader";
import DarkFooter from "./main/DarkFooter";
import SideNav from "./main/SideNav";
import MainContent from "./main/MainContent";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import "./styles.css";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins"].join(","),
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
        contrastText: "#ffffff",
      },
      dark: {
        main: "#222222",
        contrastText: "#ffffff",
      },
      gray: {
        main: "#c4c4c4",
        contrastText: "#222222",
      },
    },
  });
  {
    /* <ThemeProvider theme={theme}>
      <Grid container direction="column">
        <Grid item>
          <DarkHeader />
        </Grid>
        <Grid item>
          <Route exact path="/">
            <DarkBanner />
            <DarkLearnSection />
          </Route>
        </Grid>
        <Grid item>
          <Route path="/MainContent">
            <MainContent />
          </Route>
        </Grid>
        <Grid item>
          <DarkFooter />
        </Grid>
      </Grid>
    </ThemeProvider> */
  }
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <DarkHeader />
        <Route exact path="/">
          <DarkBanner />
          <DarkLearnSection />
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
