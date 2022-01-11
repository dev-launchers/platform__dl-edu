import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

import Tags from "./Tags";

function TagContainer(props) {
  const tagSelectedHandler = (tag) => {
    props.handleTagWasSelected(tag);
  };

  return (
    <Box>
      <List component="div" disablePadding>
        <ListItem divider />

        <ListItem
          component={Typography}
          variant={"h6"}
          sx={{ color: "theme.dark" }}
        >
          Tags
        </ListItem>
        <Box sx={{ maxHeight: "500px", overflow: "scroll" }}>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Tags onTagWasSelected={tagSelectedHandler} />
          </ListItem>
        </Box>
      </List>
    </Box>
  );
}

export default TagContainer;
