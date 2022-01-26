import React, { useState } from "react";
import ReactDOM from "react-dom";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import HandoffDropdowns from "./HandoffDropdowns";
import ModuleTags from "./ModuleTags";
import { useFormik } from "formik";
import * as yup from "yup";

import ScrollToTop from "../ScrollToTop";
import BackgroundModal from "../BackgroundModal";
import SuccessNotification from "./SuccessNotification";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  languageFilterDescriptions,
  frameworkFilterDescriptions,
} from "../../data/MenuSelectors";

let validationSchema = yup.object({
  title: yup
    .string("invalid title")
    .min(3, "title should be longer")
    .required("please enter a title"),
  description: yup
    .string("please enter a valid description")
    .min(10, "description should be at least 10 characters")
    .max(300, "description has a maximum number of 300 characters")
    .required("please enter a description"),
});
const DROPDOWNS = [
  { title: "Language", choices: languageFilterDescriptions },
  { title: "Framework", choices: frameworkFilterDescriptions },
];
function Handoff(props) {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //check to see if user has made a language/framework selection
      if (!noSelection) {
        return;
      }
      const userModuleData = {
        moduleTitle: values.title,
        moduleDescription: values.description,
        language: language,
        framework: framework,
        tags: userSelectedTags,
      };
      props.userSubmittedModule(userModuleData);
      //display success modal and notification
      setModuleCreateSuccessful(true);
      document.body.style.overflow = "hidden";
    },
  });
  const [userSelectedTags, setUserSelectedTags] = useState([]);
  const [moduleCreateSuccessful, setModuleCreateSuccessful] = useState(false);
  const [language, setLanguage] = useState("Select language");
  const [framework, setFramework] = useState("Select framework");
  const [noSelection, setNoSelection] = useState(true);

  let found;

  function handleItemWasSelected(item) {
    if (item === "Java" || item === "JavaScript" || item === "C#") {
      setNoSelection(false);
      setLanguage(item);
      return;
    }
    if (item === "Foo" || item === "Roh" || item === "Bar") {
      setNoSelection(false);
      setFramework(item);
      return;
    }
    setNoSelection(true);
    setFramework(item)
  }

  function userSelectedTag(tag) {
    //don't add tag more than once
    found = userSelectedTags.includes(tag);
    if (found) return;
    //add new tag to users tag array
    const tagSelected = userSelectedTags.slice();
    tagSelected.push(tag);
    setUserSelectedTags(tagSelected);
  }

  function handleUserDeletedTag(tag) {
    const tagSelected = userSelectedTags.filter((queryTag) => {
      return queryTag !== tag;
    });
    setUserSelectedTags(tagSelected);
  }

  function userClosedSuccessModal() {
    setModuleCreateSuccessful(false);
    document.body.style.overflow = "visible";
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
        onSubmit={formik.handleSubmit}
      >
        <Grid item xs={12}>
          <Typography variant="h5">
            Here you can submit final information about your module:
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <label>Module Title</label>
          <TextField
            id="title"
            placeholder="eg. Java Fundamentals"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
        </Grid>
        <Grid item container xs={12}>
          <Grid item xs={12}>
            <label>Module Description</label>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="description"
              placeholder="Add a short description of your modules"
              multiline
              minRows={5}
              fullWidth
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
          </Grid>
        </Grid>
        {DROPDOWNS.map((dropdown, index) => {
          return (
            <Grid key={index} item xs={12}>
              <HandoffDropdowns
                choice={index === 0 ? language : framework}
                title={dropdown.title}
                items={dropdown.choices}
                handleItemWasSelected={handleItemWasSelected}
              />
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <ModuleTags
            userTags={userSelectedTags}
            userDeletedTag={handleUserDeletedTag}
            userSelectedTag={userSelectedTag}
          />
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
        {noSelection ? (
          <Grid item xs={12}>
            <Typography sx={{ color: "error.main" }}>
              Remember to pick a framework or language!
            </Typography>
          </Grid>
        ) : null}
      </Grid>
    </>
  );
}

export default Handoff;
