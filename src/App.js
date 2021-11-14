import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Switch, Route, Redirect } from "react-router-dom";

import DarkLearnSection from "./home/DarkLearnSection";
import DarkBanner from "./home/DarkBanner";
import DarkHeader from "./main/DarkHeader";
import DarkFooter from "./main/DarkFooter";
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
            <Route exact path="/">
                <Redirect to="/home"/>
            </Route>
            <Route path="/main">
                <MainContent></MainContent>
            </Route>
            <Route path="/login">
                <Login></Login>
            </Route>
            <Route path="/sign-up">
                <SignUp></SignUp>
            </Route>
            <Route path="/about">
                <About></About>
            </Route>
            <Route path="*">
                <NotFound></NotFound>
            </Route>
        </Switch>

        <DarkFooter />

      </ThemeProvider>
    </>
  );
}

export default App;
