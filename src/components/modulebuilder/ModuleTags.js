import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import useForceRender from "../ForceRender";

function ModuleTags(props) {
  const [dynamicTagHolder, setDynamicTagHolder] = useState([
    { deleteable: false, label: "Beginner" },
    { deleteable: false, label: "Intermediate" },
    { deleteable: false, label: "Advanced" },
    { deleteable: false, label: "Functions" },
    { deleteable: false, label: "Loops" },
  ]);
  const [newTag, setNewTag] = useState("");
  const forceRender = useForceRender();

  function handleUserCreatedTag() {
    const tempTag = { deleteable: true, label: newTag };
    const tagHolder = dynamicTagHolder;
    tagHolder.push(tempTag);
    setDynamicTagHolder(tagHolder);
    setNewTag("");
    props.userSelectedTag(newTag);
  }
  function handleUserUpdatedTag(event) {
    setNewTag(event.target.value);
  }
  const handleUserSelectedTag = (tag) => () => {
    const tempTagHolder = dynamicTagHolder.slice();
    const tagIndex = tempTagHolder.indexOf(tag);
    tempTagHolder[tagIndex].deleteable = true;
    //update the deleteable object in the array
    setDynamicTagHolder(tempTagHolder);
    props.userSelectedTag(tag.label);
  };

  const handleUserDeletedTag = (tagToDelete) => () => {
    setDynamicTagHolder((tags) =>
      tags.filter((tag) => {
        return tag.label !== tagToDelete.label;
      })
    );
    props.userDeletedTag(tagToDelete.label);
  };

  return (
    <Grid container rowSpacing={2}>
      <Grid item xs={12}>
        <label>Module Tags</label>
      </Grid>
      <Grid item xs={12}>
        {dynamicTagHolder.length > 0 ? (
          <ButtonGroup>
            {dynamicTagHolder.map((tag, index) => {
              return (
                <Box sx={{ marginRight: "10px" }} key={index}>
                  <Chip
                    label={tag.label}
                    onClick={handleUserSelectedTag(tag)}
                    sx={{ position:"static" }}
                    onDelete={tag.deleteable ? handleUserDeletedTag(tag) : null}
                  />
                </Box>
              );
            })}
          </ButtonGroup>
        ) : (
          <Typography paragraph>
            No tags yet! Click below to add your own!
          </Typography>
        )}
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
        />
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
