import React, { useState } from "react";
import ReactDOM from "react-dom";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import DetailDropdowns from "./DetailDropdowns";
import ModuleTags from "./ModuleTags";
import ScrollToTop from "../ScrollToTop";
import BackgroundModal from "../BackgroundModal";
import SuccessNotification from "./SuccessNotification";

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
function Details(props) {
  const navigate = useNavigate();
  const [difficultyValue, setDifficultyValue] = useState();
  const [noDifficultySelected, setNoDifficultySelected] = useState(null);
  const [userSelectedTags, setUserSelectedTags] = useState([]);
  const [noTagSelected, setNoTagSelected] = useState(null);
  const [moduleCreateSuccessful, setModuleCreateSuccessful] = useState(false);
  const [language, setLanguage] = useState("Select language");
  const [framework, setFramework] = useState("Select framework");
  const [noSelection, setNoSelection] = useState("");
  const [validator, setValidator] = useState([
    {
      selectionValidated: false,
      message: "Remember to pick a framework or language!",
    },
    { difficultyValidated: false, message: "Remember to pick a difficulty!" },
    { tagValidated: false, message: "Remember to select a tag!" },
  ]);

  let found;
  //formik form validation
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //check to see if user has made a language/framework selection and if user has added a tag
      if (!validator[0].selectionValidated) {
        setNoSelection(true);
        return;
      }
      if (!validator[1].difficultyValidated) {
        setNoDifficultySelected(true);
        return;
      }
      if (!validator[2].tagValidated) {
        setNoTagSelected(true);
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

  function handleItemWasSelected(item) {
    if (item === "Java" || item === "JavaScript" || item === "C#") {
      const tmp = validator;
      tmp[0].selectionValidated = true;
      setValidator(tmp);
      setNoSelection(false);
      setLanguage(item);
      return;
    }
    if (item === "Foo" || item === "Roh" || item === "Bar") {
      const tmp = validator;
      tmp[0].selectionValidated = true;
      setValidator(tmp);
      setNoSelection(false);
      setFramework(item);
      return;
    }
    setNoSelection(true);
    setFramework(item);
  }
  function handleChangeDifficulty(event) {
    const tmp = validator.slice();
    tmp[1].difficultyValidated = true;
    setValidator(tmp);
    setNoDifficultySelected(false);
    setDifficultyValue(event.target.value);
  }
  function userSelectedTag(tag) {
    //don't add tag more than once
    found = userSelectedTags.includes(tag);
    if (found) return;
    //add new tag to user's tag array
    const tagSelected = userSelectedTags.slice();
    tagSelected.push(tag);
    const tmp = validator.slice();
    tmp[2].tagValidated = true;
    setNoTagSelected(false);
    setUserSelectedTags(tagSelected);
  }

  function handleUserDeletedTag(tag) {
    const tagSelected = userSelectedTags.filter((queryTag) => {
      return queryTag !== tag;
    });
    setUserSelectedTags(tagSelected);
  }

  function userClosedSuccessModal() {
    console.log(language === "Select language" ? framework : language)
    navigate(`/main-content/learning-modules/${language === "Select language" ? framework.toLowerCase() : language.toLowerCase()}`);
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
            <SuccessNotification paramater={language==="Select language" ? framework : language} closeModal={userClosedSuccessModal} />,
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
              <DetailDropdowns
                choice={index === 0 ? language : framework}
                title={dropdown.title}
                items={dropdown.choices}
                handleItemWasSelected={handleItemWasSelected}
              />
            </Grid>
          );
        })}
        {noSelection ? (
          <Grid item xs={12}>
            <Typography sx={{ color: "error.main" }}>
              {validator[0].message}
            </Typography>
          </Grid>
        ) : null}
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Difficulty</FormLabel>
            <RadioGroup
              row
              aria-label="difficulty"
              name="difficulty-buttons-group"
              value={difficultyValue}
              onChange={handleChangeDifficulty}
            >
              <FormControlLabel value="easy" control={<Radio />} label="Easy" />
              <FormControlLabel
                value="medium"
                control={<Radio />}
                label="Medium"
              />
              <FormControlLabel value="hard" control={<Radio />} label="Hard" />
            </RadioGroup>
          </FormControl>
        </Grid>
        {noDifficultySelected && (
          <Grid item xs={12}>
            <Typography sx={{ color: "error.main" }}>
              here{validator[1].message}
            </Typography>
          </Grid>
        )}
        <Grid item xs={12}>
          <ModuleTags
            userTags={userSelectedTags}
            userDeletedTag={handleUserDeletedTag}
            userSelectedTag={userSelectedTag}
          />
        </Grid>
        {noDifficultySelected && (
          <Grid item xs={12}>
            <Typography sx={{ color: "error.main" }}>
              here{validator[1].message}
            </Typography>
          </Grid>
        )}
        {noTagSelected && (
          <Grid item xs={12}>
            <Typography sx={{ color: "error.main" }}>
              {validator[2].message}
            </Typography>
          </Grid>
        )}
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

export default Details;
