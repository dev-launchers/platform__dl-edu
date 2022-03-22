import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";

import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import classes from "./CreateTFQuestion.module.css";

function CreateTFQuestion(props) {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [radioValue, setRadioValue] = useState("");
  const [addAnother, setAddAnother] = useState(false);
  const [radioTracker, setRadioTracker] = useState(-1);

  function handleUserClickedInfoButton() {
    window.alert("Testing!");
  }
  function handleUserChandedTitle(event) {
    setTitleError(false);
    setTitle(event.target.value);
  }
  function handleValidateTitle() {
    if (title.length < 5) {
      setTitleError(true);
    }
  }

  function handleChangeRadioAnswer(event) {
    setRadioValue(event.target.value);
  }

  function handleQuestionWasSubmitted(event) {
    event.preventDefault();
    //don't allow user to submit a question title < 5 chars
    if (titleError || radioValue === "") return;

    const userQuestion = {
      addAnother: addAnother,
      title: title,
      answers: [
        { id: Math.random(), answer: "True" },
        { id: Math.random(), answer: "False" },
      ],
      isCorrectAnswer: radioValue ? 0 : 1,
    };
    //determine if the user is going to submit another quesion
    if (addAnother) {
      setAddAnother(false);
      props.userSubmittedQuestion(userQuestion);
    } else {
      props.userSubmittedQuestion(userQuestion);
    }
  }
  return (
    <>
      <form
        onSubmit={handleQuestionWasSubmitted}
        className={classes.createForm}
      >
        <Stack
          spacing={3}
          component={Card}
          padding="24px"
          sx={{ overflowY: "scroll", height: "80vh" }}
        >
          <Box width="100%" display="flex" justifyContent="flex-end">
            <CloseIcon
              onClick={props.onClose}
              cursor="pointer"
              fontSize="large"
            />
          </Box>
          <Typography variant="h4">True or False?</Typography>
          <Typography
            sx={{
              display: "flex",
              width: "20%",
              justifyContent: "space-evenly",
            }}
          >
            Question
            <InfoIcon
              fontSize="small"
              sx={{ cursor: "pointer" }}
              onClick={handleUserClickedInfoButton}
            />
            {/* Not sure if this delete icon is necessary...what will happen when clicked? <DeleteIcon
              onClick={props.onClose}
              sx={{ cursor: "pointer" }}
              color="gray"
              fontSize="small"
            /> */}
          </Typography>
          <TextField
            error={titleError ? titleError : titleError}
            helperText={
              titleError
                ? "Error: title must be at least five letters long"
                : null
            }
            sx={{ backgroundColor: "theme.gray" }}
            placeholder="e.g. how to write an if statement"
            onChange={handleUserChandedTitle}
            onBlur={handleValidateTitle}
            value={title}
          />
          <FormControl component="fieldset">
            <FormLabel component="legend">Selection</FormLabel>
            <RadioGroup
              aria-label="tf"
              name="tf-buttons-group"
              value={radioValue}
              onChange={handleChangeRadioAnswer}
            >
              <FormControlLabel value="true" control={<Radio />} label="True" />
              <FormControlLabel
                value="false"
                control={<Radio />}
                label="False"
              />
            </RadioGroup>
          </FormControl>
          <Box
            display="flex"
            justifyContent="space-evenly"
            flexDirection="column"
            alignItems="flex-start"
            height="105px"
          ><Box display="flex" justifyContent="space-evenly">
            <Button
              variant="contained"
              type="submit"
              onClick={() => setAddAnother(true)}
            >
              Save and add another
            </Button>
            <Button variant="contained" type="submit">
              Save and back
            </Button>
          </Box></Box>
          <Box>
            {radioTracker === -1 ? (
              <Typography color="red">
                Remember to mark a correct answer!
              </Typography>
            ) : null}
          </Box>
        </Stack>
      </form>
    </>
  );
}

export default CreateTFQuestion;
