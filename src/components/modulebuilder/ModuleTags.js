import React, { useState } from "react";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const tagHolder = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Functions",
  "Loops",
];

function ModuleTags(props) {
  const [dynamicTagHolder, setDynamicTagHolder] = useState(tagHolder);
  const [newTag, setNewTag] = useState("");

  function handleUserCreatedTag() {
    tagHolder.push(newTag);
    setDynamicTagHolder(tagHolder);
    setNewTag("");
  }
  function handleUserUpdatedTag(event) {
    setNewTag(event.target.value);
  }
  function handleUserSubmittedTag(event) {
    props.userSubmittedTag(event.target.textContent);
  }

  return (
    <Grid container rowSpacing={2}>
      <Grid item xs={12}>
        <label>Module Tags</label>
      </Grid>
      <Grid item xs={12}>
        <ButtonGroup>
          {dynamicTagHolder.map((tag) => {
            return (
              <Box sx={{ marginRight: "10px" }}>
                <Button
                  variant="contained"
                  color="gray"
                  onClick={handleUserSubmittedTag}
                  sx={{ position:"static" }}
                >
                  {tag}
                </Button>
              </Box>
            );
          })}
        </ButtonGroup>
      </Grid>
      <Grid item xs={8} sx={{ display: "flex", alignItems: "center", position:"static" }}>
        <TextField
          onChange={handleUserUpdatedTag}
          placeholder="+ Add your own tag"
          sx={{ mr: "10px", position:"static" }}
          value={newTag}
        ></TextField>
        {newTag !== "" ? (
          <Button
            variant="contained"
            color="brightBlue"
            onClick={handleUserCreatedTag}
          >
            Add tag
          </Button>
        ) : null}
      </Grid>
    </Grid>
  );
}

export default ModuleTags;
