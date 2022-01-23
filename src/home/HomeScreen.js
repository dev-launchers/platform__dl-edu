import React from "react";
import Box from "@mui/material/Box";

import DarkLearnSection from "./DarkLearnSection";
import DarkBanner from "./DarkBanner";
import Create from "./Create";
import Challenge from "./Challenge";

function HomeScreen() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingBottom: "350px",
        width: "100%",
      }}
    >
      <DarkBanner />
      <DarkLearnSection />
      <Create />
      <Challenge />
    </Box>
  );
}

export default HomeScreen;
