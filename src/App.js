import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";

import DarkHeader from "./main/DarkHeader";
import DarkFooter from "./main/DarkFooter";
import HomeScreen from "./home/HomeScreen";
import MainContent from "./main/MainContent";
import About from "./pages/About";
import GoogleAuthCallback from "./auth/GoogleAuthCallback";

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
      brightBlue: {
        main: "#0058DB",
        contrastText: "#ffffff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={classes.appWrapper}>
        <DarkHeader />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<About />} />
          <Route path="/main-content/*" element={<MainContent />} />
          <Route path="/signup" element={<GoogleAuthCallback />} />
        </Routes>
        <DarkFooter />
      </Box>
    </ThemeProvider>
  );
}

export default App;
