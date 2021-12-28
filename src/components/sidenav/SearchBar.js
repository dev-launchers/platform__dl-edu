import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import Search from "@mui/icons-material/Search";

import ModuleMetaData from "../../data/ModuleMetadata";

function SearchBar(props) {
  const tagHolder = [];
  const frequencyArray = [];
  let found;
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);

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

  const handleOpen = () => {
    if (inputValue.length > 0) {
      setOpen(true);
    }
  };
  function handleClose() {
    setOpen(false);
  }
  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
    if (newInputValue.length > 0) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  function tagWasSelected(event, value) {
    props.handleTagWasSelected(value);
  }
  return (
      <Autocomplete
        freeSolo
        id="keyWord-search"
        disableClearable
        options={frequencyArray.map((keyWord) => keyWord.name)}
        onChange={tagWasSelected}
        open={open}
        onInputChange={handleInputChange}
        onOpen={handleOpen}
        onClose={handleClose}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for a keyword"
            InputProps={{
              ...params.InputProps,
              type: "search",
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
  );
}

export default SearchBar;
