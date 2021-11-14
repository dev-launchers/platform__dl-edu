import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Switch, Route, Redirect } from "react-router-dom";

import DarkHeader from "./master/DarkHeader";
import DarkBanner from "./master/DarkBanner";
import DarkLearnSection from "./master/DarkLearnSection";
import DarkFooter from "./master/DarkFooter";
import MainContent from "./master/MainContent"

import "./styles.css";

function DarkApp() {
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
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <DarkHeader />
        
        <Switch>
            <Route path="/home">
                <DarkBanner />
                <DarkLearnSection />
            </Route>
            <Route path="/main">
                <MainContent></MainContent>
            </Route>
            <Route exact path="/">
                <Redirect to="/home"/>
            </Route>
            <Route path="*">
                <h1 style={{padding: '1em'}}>This page doesn't exist :(</h1>
            </Route>
        </Switch>

        <DarkFooter />

      </ThemeProvider>
    </>
  );
}

export default DarkApp;
