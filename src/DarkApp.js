import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import DarkHeader from "./master/DarkHeader";
import DarkSlogan from "./master/DarkSlogan";

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
        <DarkSlogan />
      </ThemeProvider>
    </>
  );
}

export default DarkApp;
