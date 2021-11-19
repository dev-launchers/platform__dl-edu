import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Switch, Route, Redirect } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import DarkLearnSection from "./home/DarkLearnSection";
import DarkBanner from "./home/DarkBanner";
import Header from "./main/Header";
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

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainContent />
    </ThemeProvider>
  );
}

export default App;
