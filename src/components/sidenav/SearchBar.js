import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import Search from "@mui/icons-material/Search";

import frequencyArray from "../../data/FrequencyArray";

function SearchBar(props) {
  let history = useHistory();
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);

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
    history.push(`/main-content/learning-module/filter-by=${value.toLowerCase()}`);
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
