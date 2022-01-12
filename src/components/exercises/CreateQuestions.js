import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";

import useForceRender from "../ForceRender";
import classes from "./CreateQuestions.module.css";
import AnswerField from "./AnswerField";

function CreateQuestions(props) {
  const [title, setTitle] = useState("");

  const [addAnother, setAddAnother] = useState(false);
  const [answerToShow, setAnswerToShow] = useState(false);
  const forceRender = useForceRender();

  const [answerFieldQuantity, setAnswerFieldQuantity] = useState(
    props.questionType === "True or False Questions" ? 2 : 3
  );
  
  let answerFields = [];
  for (let i = 0; i < answerFieldQuantity; i++) {
    answerFields.push(
      <TextField
        size="medium"
        sx={{ backgroundColor: "theme.gray" }}
        placeholder={"eg. how to write an if statement"}
       />
    );
  }

  //show "add more answers button if the question is MC"
  const moreAnswersButton =
    answerFieldQuantity === 2 ? null : (
      <Button onClick={handleUserAddedQuestion}>Add more answers</Button>
    );

  function handleUserChandedTitle(event) {
    event.preventDefault();
    setTitle(event.target.value);
  }
  function handleUserUpdatedAnswer(text) {}
  function handleUserAddedQuestion() {
    //user can create no more than 6 answers
    if (answerFieldQuantity < 6) {
      const updatedAnswerQuantity = answerFieldQuantity + 1;
      setAnswerFieldQuantity(updatedAnswerQuantity);
    }
  }
  function handleQuestionWasSubmitted(event) {
    event.preventDefault();
    //set that a question has been submitted to true
    setAnswerToShow(true);
    //determine if the user is going to submit another quesion
    if (addAnother) {
      console.log("here")
      forceRender();
      setAddAnother(false);
    } else {
      props.onClose();
    }
    setResetAnswerText(false);
  }
  return (
    <>
      <form
        onSubmit={handleQuestionWasSubmitted}
        className={classes.createForm}
      >
        <Stack spacing={3} component={Card} padding="24px">
          <Box width="100%" display="flex" justifyContent="flex-end">
            <CloseIcon
              onClick={props.onClose}
              cursor="pointer"
              fontSize="large"
            />
          </Box>
          <Typography variant="h4">{props.questionType}</Typography>
          <Typography>
            Question
            <InfoIcon sx={{ mr: "10px", ml: "10px" }} fontSize="small" />
            <DeleteIcon
              onClick={props.onClose}
              sx={{ mr: "10px", cursor: "pointer" }}
              color="gray"
              fontSize="small"
            />
          </Typography>
          <TextField
            size="medium"
            sx={{ backgroundColor: "theme.gray" }}
            placeholder="eg. how to write an if statement"
            onChange={handleUserChandedTitle}
            value={title}
          ></TextField>
          <Typography paragraph>Answers</Typography>
          {answerFields}
          <Box
            display="flex"
            justifyContent="space-evenly"
            flexDirection="column"
            alignItems="flex-start"
            height="105px"
          >
            {moreAnswersButton}
            <Box width="50%" display="flex" justifyContent="space-evenly">
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
            </Box>
          </Box>
        </Stack>
      </form>
    </>
  );
}

export default CreateQuestions;
