import React from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Search from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <Container sx={{ width: "100%", alignItems: "center" }}>
      <TextField
        id="filled-basic"
        label="Search"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          ),
        }}
        sx={{
          mt: "5px",
          paddingBottom: "5px",
          width: "90%",
          alignItems: "center",
        }}
      />
    </Container>
  );
}

export default SearchBar;
