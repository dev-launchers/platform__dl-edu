import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Switch, Route, Redirect } from "react-router-dom";

import DarkLearnSection from "./home/DarkLearnSection";
import DarkBanner from "./home/DarkBanner";
import HeaderAndDrawer from "./main/HeaderAndDrawer";
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
        main:"#222222",
        contrastText: "#ffffff",
      }
    },
  });
 
  return (
    <>
      <ThemeProvider theme={theme}>
      <HeaderAndDrawer />
      {/* <SideNav checkIsOpen={isOpen}/> */}
      </ThemeProvider>
    </>
  );
}

export default App;
