import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import DarkHeader from "./master/DarkHeader";
import DarkBanner from "./master/DarkBanner";

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
      </ThemeProvider>
    </>
  );
}

export default DarkApp;
