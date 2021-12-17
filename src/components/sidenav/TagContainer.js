import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ModuleMetaData from "../../data/ModuleMetadata";

import Tags from "./Tags";

function TagContainer() {
  return (
    <Container>
      <Typography paragraph sx={{ color: "theme.dark" }}>
        Tags
      </Typography>
      <Tags />
    </Container>
  );
}

export default TagContainer;
