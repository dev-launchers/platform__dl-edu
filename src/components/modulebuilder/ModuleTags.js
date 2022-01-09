import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import useForceRender from "../ForceRender";
import DeleteIcon from "@mui/icons-material/Delete";

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
  const forceRender = useForceRender();

  function handleUserCreatedTag() {
    tagHolder.push(newTag);
    setDynamicTagHolder(tagHolder);
    setNewTag("");
  }
  function handleUserUpdatedTag(event) {
    setNewTag(event.target.value);
  }
  function handleUserSelectedTag(event) {
    props.userSelectedTag(event.target.textContent);
    //force component to re-render so user can view which tags have been selected
    forceRender();
  }
  function handleUserRemovedTag(tag) {
    props.userRemovedTag(tag);
    forceRender();
  }

  return (
    <Grid container rowSpacing={2}>
      <Grid item xs={12}>
        <label>Module Tags</label>
      </Grid>
      <Grid item xs={12}>
        <ButtonGroup>
          {dynamicTagHolder.map((tag, index) => {
            return (
              <Box sx={{ marginRight: "10px" }} key={index}>
                <Button
                  variant="contained"
                  color="gray"
                  disableRipple
                  onClick={handleUserSelectedTag}
                  sx={{ position: "static" }}
                  endIcon={
                    props.userTags.includes(tag) ? (
                      <DeleteIcon onClick={() => handleUserRemovedTag(tag)} />
                    ) : null
                  }
                >
                  {tag}
                </Button>
              </Box>
            );
          })}
        </ButtonGroup>
      </Grid>
      <Grid
        item
        xs={8}
        sx={{ display: "flex", alignItems: "center", position: "static" }}
      >
        <TextField
          onChange={handleUserUpdatedTag}
          placeholder="+ Add your own tag"
          sx={{ mr: "10px", position: "static" }}
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
