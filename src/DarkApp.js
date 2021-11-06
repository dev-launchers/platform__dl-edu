import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import DarkHeader from "./master/DarkHeader";
import DarkBanner from "./master/DarkBanner";
import DarkLearnSection from './master/DarkLearnSection';

function DarkApp() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins"].join(","),
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <DarkHeader />
        <DarkBanner />
        <DarkLearnSection />
      </ThemeProvider>
    </>
  );
}

export default DarkApp;
