import React from "react";
import Typography from "@mui/material/Typography";

import ModuleMetaData from "../../data/ModuleMetadata";

function Tags() {
  const tagHolder = [];
  const frequencyArray = [];
  let found;
  ModuleMetaData.forEach((item) => {
    item.keyWords.forEach((tag) => tagHolder.push(tag));
  });

  tagHolder.forEach((tag) => {
    //look for matching tag already in array
    found = frequencyArray.findIndex(
      (searchedForTag) => searchedForTag.name === tag
    );
    if (found === -1) {
      frequencyArray.push({ name: tag, frequency: 1 });
    } else {
      frequencyArray[found].frequency++;
    }
  });
  //sort the array in descending order
  frequencyArray.sort(function (a, b) {
    return b.frequency - a.frequency;
  });

  const sortedTags = frequencyArray.map((tag, index) => {
    return (
      <Typography paragraphy sx={{ color: "theme.dark" }} key={index}>
        {tag.name} ({tag.frequency})
      </Typography>
    );
  });

  return <React.Fragment>{sortedTags}</React.Fragment>;
}

export default Tags;
