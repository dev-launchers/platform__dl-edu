import React, { useState } from "react";
import ReactDOM from "react-dom";
import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import HandoffDropdowns from "./HandoffDropdowns";
import ModuleTags from "./ModuleTags";

import BackgroundModal from "../BackgroundModal";
import SuccessNotification from "./SuccessNotification";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";

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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [framework, setFramework] = useState("");
  const [userSelectedTags, setUserSelectedTags] = useState([]);
  const [moduleCreateSuccessful, setModuleCreateSuccessful] = useState(false);

  let found;

  function handleDescriptionWasUpdated(event) {
    setDescription(event.target.value);
  }
  function handleTitleWasUpdated(event) {
    setTitle(event.target.value);
  }
  function handleItemWasSelected(item) {
    if (item === "Java" || item === "JavaScript" || item === "C#") {
      setLanguage(item);
      return;
    }
    setFramework(item);
  }

  function userSubmittedTag(tag) {
    //don't add tag more than once
    found = userSelectedTags.includes(tag);
    if (found) return;
    const tagSelected = userSelectedTags;
    tagSelected.push(tag);
    setUserSelectedTags(tagSelected);
  }

  function handleUserSubmittedModule(event) {
    event.preventDefault();

    const userModuleData = {
      moduleTitle: event.target[0].value,
      moduleDescription: event.target[2].value,
      language: language,
      framework: framework,
      tags: userSelectedTags,
    };
    //take all user created data and send it to back-end with fetch, axios, etc.
    console.log(userModuleData);

    //reset all fields
    setTitle("");
    setDescription("");
    setLanguage("");
    setFramework("");
    setUserSelectedTags([]);
    //display success modal and notification
    setModuleCreateSuccessful(true);
  }

  function userClosedSuccessModal() {
    setModuleCreateSuccessful(false);
  }
  return (
    <>
      {moduleCreateSuccessful
        ? <>
        {ReactDOM.createPortal(
            <BackgroundModal closeModal={userClosedSuccessModal} />,
            document.getElementById("background-modal"))}
        {ReactDOM.createPortal(<SuccessNotification closeModal={userClosedSuccessModal} />, document.getElementById("description-modal"))}
           </>
        : null}

      <Grid
        container
        rowSpacing={4}
        component="form"
        onSubmit={handleUserSubmittedModule}
      >
        <Grid item xs={12}>
          <Typography variant="h5">
            Here you can submit final information about your module:
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <label>Module Title</label>
          <TextField
            placeholder="eg. Java Fundamentals"
            onChange={handleTitleWasUpdated}
            value={title}
          />
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
              value={description}
              onChange={handleDescriptionWasUpdated}
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
          <ModuleTags userSubmittedTag={userSubmittedTag} />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                height: "25px",
                width: "25px",
                borderRadius: "50%",
                backgroundColor: "#0058DB",
              }}
            >
              <PlayArrowIcon color="neutral" />
            </Box>
            <Button>Preview</Button>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Button variant="contained" color="brightBlue" sx={{ mr: "5px" }}>
            Save
          </Button>
          <Button variant="contained" color="brightBlue" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Handoff;
