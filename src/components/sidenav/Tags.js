import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

import ModuleMetaData from "../../data/ModuleMetadata";

function Tags(props) {
  const frequencyArray = [];
  let found;
  const tagHolder = [];

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
  if (frequencyArray.length >= 10) {
    slicedTags = frequencyArray.slice(0, 9).map((tag, index) => {
      return (
        <Button
          sx={{ color: "#333333" }}
          key={index}
          component={NavLink}
          to={`/main-content/learning-module/filter-by=${tag.name.toLowerCase()}`}
          onClick={() => handleTagWasClicked(tag.name)}
        >
          {tag.name} ({tag.frequency})
        </Button>
      );
    });
  }
  let allTags = frequencyArray.map((tag, index) => {
    return (
      <Button
        sx={{ color: "#333333" }}
        component={NavLink}
        to={`/main-content/learning-module/filter-by=${tag.name}`}
        key={index}
        onClick={() => handleTagWasClicked(tag.name)}
      >
        {tag.name} ({tag.frequency})
      </Button>
    );
  });

  const [dynamicFrequencyArray, setDynamicFrequencyArray] = useState(
    frequencyArray.length >= 10 ? slicedTags : allTags
  );

  function handleShowMore() {
    setDynamicFrequencyArray(allTags);
  }
  function handleShowLess() {
    setDynamicFrequencyArray(slicedTags);
  }
  function handleTagWasClicked(tag) {
    props.onTagWasSelected(tag);
  }
  return (
    <>
      {dynamicFrequencyArray.length === 9 ? (
        <>
          {dynamicFrequencyArray}
          <Typography
            paragraph
            sx={{ color: "theme.dark", cursor:"pointer" }}
            onClick={handleShowMore}
          >
            show more...({frequencyArray.length - 9})
          </Typography>
        </>
      ) : (
        <>
          {dynamicFrequencyArray}
          <Typography
            paragraph
            sx={{ color: "theme.dark", cursor:"pointer" }}
            onClick={handleShowLess}
          >
            show less...
          </Typography>
        </>
      )}
    </>
  );
}

export default Tags;