import React from "react";
import Typography from "@mui/material/Typography";

import ModuleMetaData from "../../data/ModuleMetadata";

const tagHolder = ModuleMetaData.forEach((item) => {
  item.keyWords.map((tag) => {
    return (
      <Typography paragraph sx={{ color: "theme.dark" }}>
        {tag}
      </Typography>
    );
  });
});

function Tags() {
  return <React.Fragment>{tagHolder}</React.Fragment>;
}

export default Tags;
