import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

import Tags from "./Tags";

function TagContainer() {
  return (
    <Box >
      <List component="div" disablePadding>
        <ListItem divider />
        <ListItem component={Typography} variant={"h6"} sx={{ color: "theme.dark" }}>
            Tags
        </ListItem>
        <ListItem sx={{ display: "flex", flexDirection: "column", alignItems:"flex-start" }}>
          <Tags />
        </ListItem>
      </List>
    </Box>
  );
}

export default TagContainer;
