import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function Handoff() {
  const [language, setLanguage] = useState("");
  const [frameWork, setFramework] = useState("");

  function handleLanguageWasSelected(event) {
    setLanguage(event.target.value);
  }
  function handleFrameworkWasSelected(event) {
    setFramework(event.target.value);
  }

  return (
    <Grid container rowSpacing={4} component="form">
      <Grid item xs={12}>
        <Typography variant="h5">
          Here you can submit final information about your module:
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <label>Module Title</label>
        <TextField placeholder="eg. Java Fundamentals" />
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={12}>
          <label>Module Description</label>
        </Grid>
        <Grid item xs={8}>
          <TextField
            placeholder="Add a short description of your modules"
            size="medium"
            multiline
            minRows={5}
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={12}>
          <label>Language</label>
        </Grid>
        <Grid item xs={5}>
          <Select
            labelId="select-language"
            id="select-language-id"
            value={language}
            label="Language"
            onChange={handleLanguageWasSelected}
          >
            <MenuItem value={"JavaScript"}>JavaScript</MenuItem>
            <MenuItem value={"Java"}>Java</MenuItem>
            <MenuItem value={"C#"}>C#</MenuItem>
          </Select>
        </Grid>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={12}>
          <label>Framework</label>
        </Grid>
        <Grid item>
          <Select
            labelId="select-framework"
            id="select-framework-id"
            value={language}
            label="Framework"
            onChange={handleFrameworkWasSelected}
          >
            <MenuItem value={"Foo"}>Foo</MenuItem>
            <MenuItem value={"Roh"}>Roh</MenuItem>
            <MenuItem value={"Bar"}>Bar</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Handoff;
