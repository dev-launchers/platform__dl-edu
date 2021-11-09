import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import DarkHeader from "./master/DarkHeader";
import DarkBanner from "./master/DarkBanner";
import DarkLearnSection from './master/DarkLearnSection';
import DarkFooter from './master/DarkFooter';

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
        main: "#ff7f0e"
      } 
    }
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <DarkHeader />
        <DarkBanner />
        <DarkLearnSection />
        <DarkFooter />
      </ThemeProvider>
    </>
  );
}

export default DarkApp;
