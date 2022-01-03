import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HandoffDropdowns from "./HandoffDropdowns";
import ModuleTags from "./ModuleTags";

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Box } from "@mui/system";

const languageFilterDescriptions = [
  {
    id: "0",
    name: "Javascript",
    link: "/main-content/learning-modules/javascript",
  },
  { id: "1", name: "Java", link: "/main-content/learning-modules/java" },
  { id: "2", name: "C#", link: "/main-content/learning-modules/csharp" },
];
const frameworkFilterDescriptions = [
  { id: "3", name: "Foo", link: "/main-content/learning-modules/javascript" },
  { id: "4", name: "Roh", link: "/main-content/learning-modules/java" },
  { id: "5", name: "Bar", link: "/main-content/learning-modules/csharp" },
  { id: "6", name: "Bar", link: "/main-content/learning-modules/csharp" },
];

function Handoff() {
  const [language, setLanguage] = useState("");
  const [framework, setFramework] = useState("");
  const [userSelectedTags, setUserSelectedTags] = useState([]);
  const styledPlayButton = <Badge color="brightBlue" badgeContent={<PlayArrowIcon />} />

  function handleItemWasSelected(item) {
    if (item === "Java" || item === "JavaScript" || item === "C#") {
      setLanguage(item);
      return;
    }
    setFramework(item);
  }

  function userSubmittedTag(tag) {
    const tagSelected = userSelectedTags;
    console.log(tagSelected)
    tagSelected.push(tag);
    setUserSelectedTags(tagSelected);
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
      <Grid item xs={12}>
        <HandoffDropdowns
          title="Language"
          items={languageFilterDescriptions}
          handleItemWasSelected={handleItemWasSelected}
        />
      </Grid>
      <Grid>
        <HandoffDropdowns
          title="Framework"
          items={frameworkFilterDescriptions}
          handleItemWasSelected={handleItemWasSelected}
        />
      </Grid>
      <Grid item xs={12}>
        <ModuleTags userSubmittedTag={userSubmittedTag}/>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ mr:"30px" }}>{styledPlayButton}<Button>Preview</Button></Box>
      </Grid>
      <Grid item xs={5}>
        <Button variant="contained" color="brightBlue" sx={{ mr:"5px" }}>Save</Button>
        <Button variant="contained" color="brightBlue">Submit</Button>
      </Grid>
    </Grid>
  );
}

export default Handoff;
