import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import HandoffDropdowns from "./HandoffDropdowns";
import ModuleTags from "./ModuleTags";

import useForceRender from "../ForceRender";
import ScrollToTop from "../ScrollToTop";
import BackgroundModal from "../BackgroundModal";
import SuccessNotification from "./SuccessNotification";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  languageFilterDescriptions,
  frameworkFilterDescriptions,
} from "../../data/MenuSelectors";

function Handoff() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [framework, setFramework] = useState("");
  const [userSelectedTags, setUserSelectedTags] = useState([]);
  const [moduleCreateSuccessful, setModuleCreateSuccessful] = useState(false);
  const forceRender = useForceRender();

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

  function userSelectedTag(tag) {
    //don't add tag more than once
    found = userSelectedTags.includes(tag);
    if (found) return;
    //add new tag to users tag array
    const tagSelected = userSelectedTags;
    tagSelected.push(tag);
    setUserSelectedTags(tagSelected);
  }

  function handleUserRemovedTag(tag) {
    if (userSelectedTags.length === 1) {
      console.log("here");
      forceRender();
    }
    const tagSelected = userSelectedTags.filter((queryTag) => {
      return queryTag !== tag;
    });
    setUserSelectedTags(tagSelected);
    /* const tagIndex = tagSelected.indexOf(tag);
    if(tagIndex === 0) setUserSelectedTags([]);
    //if tag isn't in array/error handling
    if (tagIndex > 0) {
      tagSelected.splice(tagIndex-1, 1);
      console.log(tagSelected)
      setUserSelectedTags(tagSelected);
    }*/
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
    document.body.style.overflow = "hidden";
  }

  function userClosedSuccessModal() {
    setModuleCreateSuccessful(false);
    document.body.style.overflow = "unset";
  }
  return (
    <>
      {moduleCreateSuccessful ? (
        <>
          {ReactDOM.createPortal(
            <BackgroundModal closeModal={userClosedSuccessModal} />,
            document.getElementById("background-modal")
          )}
          {ReactDOM.createPortal(
            <SuccessNotification closeModal={userClosedSuccessModal} />,
            document.getElementById("description-modal")
          )}
        </>
      ) : null}

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
          <ModuleTags
            userTags={userSelectedTags}
            userRemovedTag={handleUserRemovedTag}
            userSelectedTag={userSelectedTag}
          />
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
          <Button
            variant="contained"
            color="brightBlue"
            type="submit"
            onClick={ScrollToTop}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Handoff;
