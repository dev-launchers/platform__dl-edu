import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

import frequencyArray from "../../data/FrequencyArray";

function Tags(props) {

  let slicedTags;
  if (frequencyArray.length >= 10) {
    slicedTags = frequencyArray.slice(0, 9).map((tag, index) => {
      return (
        <Button
          sx={{ color: "#ffffff" }}
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
        sx={{ color: "#ffffff" }}
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
            sx={{ color: "#ffffff", cursor:"pointer" }}
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
            sx={{ color: "#ffffff", cursor:"pointer" }}
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
