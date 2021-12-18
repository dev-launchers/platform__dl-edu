import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import ModuleMetaData from "../../data/ModuleMetadata";

function Tags() {
  const tagHolder = [];
  const frequencyArray = [];
  let found;

  //take each metadata object and extract the keywords from each.  place keywords in tagHolder array
  ModuleMetaData.forEach((item) => {
    item.keyWords.forEach((tag) => tagHolder.push(tag));
  });
  tagHolder.forEach((tag) => {
    //look for matching tag already in array
    found = frequencyArray.findIndex(
      (searchedForTag) => searchedForTag.name === tag
    );
    //if not found, push tag into array, frequency = 1
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

  let slicedTags;
  let allTags;
  if (frequencyArray.length > 10) {
    slicedTags = frequencyArray.slice(0, 9).map((tag, index) => {
      return (
        <Typography paragraph sx={{ color: "theme.dark" }} key={index}>
          {tag.name} ({tag.frequency})
        </Typography>
      );
    });
  } 
    allTags = frequencyArray.map((tag, index) => {
      return (
        <Typography paragraph sx={{ color: "theme.dark" }} key={index}>
          {tag.name} ({tag.frequency})
        </Typography>
      );
    });
  
  const [dynamicFrequencyArray, setDynamicFrequencyArray] = useState(
    allTags ? allTags : slicedTags
  );

  function handleShowMore() {
    setDynamicFrequencyArray(allTags);
  }
  function handleShowLess() {
    setDynamicFrequencyArray(slicedTags);
  }
  return (
    <>
      {dynamicFrequencyArray.length === 9 ? (
        <>
          {dynamicFrequencyArray}
          <Typography
            paragraph
            component={Button}
            sx={{ color: "theme.dark" }}
            onClick={handleShowMore}
          >
            show more...()
          </Typography>
        </>
      ) : (
        <>
          {dynamicFrequencyArray}
          <Typography
            paragraph
            component={Button}
            sx={{ color: "theme.dark" }}
            onClick={handleShowLess}
          >
            show less...()
          </Typography>
        </>
      )}
    </>
  );
}

export default Tags;
