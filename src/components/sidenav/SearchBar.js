import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import Search from "@mui/icons-material/Search";
import { styled } from "@mui/material";

const StyledTextField = styled(TextField)`
  background: #4e4e4e;

  & .MuiInput-underline:after {
    border-bottom-color: white;
  }
  & .MuiOutlinedInput-root {
    /* & fieldset {
      border-color: white;
    } */
    &:hover fieldset {
      border-color: white;
    }
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;

import frequencyArray from "../../data/FrequencyArray";

function SearchBar(props) {
  let navigate = useNavigate();
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
    navigate(`/main-content/learning-module/filter-by=${value.toLowerCase()}`);
  }
  return (
    <>
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
          <StyledTextField
            {...params}
            placeholder="search for a keyword"
            InputProps={{
              ...params.InputProps,
              type: "search",
              endAdornment: (
                <InputAdornment position="end">
                  <Search sx={{ color: "#ffffff" }} />
                </InputAdornment>
              ),
              style: { color: "#ffffff" },
            }}
          />
        )}
      />
    </>
  );
}

export default SearchBar;
