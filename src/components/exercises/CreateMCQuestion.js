import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import classes from "./CreateMCQuestion.module.css";
import AnswerField from "./AnswerField";

const StyledTextField = styled(TextField)`
  background: #4e4e4e;

  & .MuiInput-underline:after {
    border-bottom-color: white;
  }
  & .MuiOutlinedInput-root {
    /* & fieldset {
        border-color: white;
      } */
    &:hover fieldset {
      border-color: white;
    }
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;

function CreateMCQuestion(props) {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [answerError, setAnswerError] = useState(false);
  const [addAnother, setAddAnother] = useState(false);
  const [radioTracker, setRadioTracker] = useState(-1);
  const [answerFieldQuantity, setAnswerFieldQuantity] = useState(3);
  const [answerFields, setAnswerFields] = useState([
    { id: Math.random(), answer: "" },
    { id: Math.random(), answer: "" },
    { id: Math.random(), answer: "" },
    { id: Math.random(), answer: "" },
  ]);

  function handleUserChandedTitle(event) {
    setTitleError(false);
    setTitle(event.target.value);
  }
  function handleValidateTitle() {
    if (title.length < 5) {
      setTitleError(true);
    }
  }
  function handleUserTypedAnswer(answer, index) {
    const tempAnswerValue = answerFields.slice();
    tempAnswerValue[index].answer = answer;
    setAnswerFields(tempAnswerValue);
  }
  function handleUserSelectedCorrectAnswer(index) {
    setRadioTracker(index);
  }
  function handleUserAddedAnswerField() {
    if (answerFields.length >= 6) {
      return;
    }
    setAnswerFieldQuantity((oldValue) => oldValue + 1);
    const tempAnswerField = answerFields.slice();
    tempAnswerField.push({ id: Math.random(), answer: "" });
    setAnswerFields(tempAnswerField);
  }

  function handleUserRemovedAnswerField(index) {
    //can't have less than 2 answers
    if (answerFields.length < 2) return;
    setAnswerFieldQuantity((oldValue) => oldValue - 1);
    const tempAnswers = answerFields.slice();
    //slice everything before and after the index
    tempAnswers.splice(index, 1);
    setAnswerFields(tempAnswers);
    setRadioTracker(-1);
  }

  function handleQuestionWasSubmitted(event) {
    event.preventDefault();
    setAnswerError(false);
    //don't allow user to submit a question title < 5 chars
    if (titleError || radioTracker === -1) return;
    //validate answers are not blank
    for (let i = 0; i < answerFields.length; i++) {
      if (answerFields[i].answer.length === 0) {
        //set error here
        setAnswerError(true);
        return;
      }
    }
    const userQuestion = {
      addAnother: addAnother,
      answerQuantity: answerFieldQuantity,
      title: title,
      answers: answerFields,
      isCorrectAnswer: radioTracker,
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
          sx={{ overflowY: "scroll", height: "80vh", backgroundColor:"#262626" }}
        >
          <Box width="100%" display="flex" justifyContent="flex-end">
            <CloseIcon
              onClick={props.onClose}
              cursor="pointer"
              fontSize="large"
            />
          </Box>
          <Typography variant="h4" sx={{ color:"neutral.main" }}>Multiple Choice</Typography>
          <Typography
            sx={{
              color:"neutral.main"
            }}
          >
            Question
          </Typography>
          <StyledTextField
            error={titleError ? titleError : titleError}
            helperText={
              titleError
                ? "Error: title must be at least five letters long"
                : null
            }
            size="medium"
            sx={{ backgroundColor: "theme.gray" }}
            placeholder="e.g. how to write an if statement"
            onChange={handleUserChandedTitle}
            onBlur={handleValidateTitle}
            value={title}
            inputProps={{ style: { color: "#ffffff" } }}
          />
          <Typography paragraph sx={{ color:"neutral.main" }}>Answers</Typography>
            {answerFields.map((answer, index) => {
              return (
                <AnswerField
                  key={answer.id}
                  radioIndex={radioTracker}
                  userSelectedCorrectAnswer={handleUserSelectedCorrectAnswer}
                  handleUserTypedAnswer={handleUserTypedAnswer}
                  handleUserRemovedAnswerField={handleUserRemovedAnswerField}
                  id={index}
                  answer={answer.answer}
                />
              );
            })}

          <Box
            display="flex"
            justifyContent="space-evenly"
            flexDirection="column"
            alignItems="flex-start"
            height="105px"
          >
            <Box display="flex" justifyContent="space-evenly">
              <Button
                variant="contained"
                type="submit"
                color="secondary"
                onClick={() => setAddAnother(true)}
                sx={{ mr: "5px" }}
                >
                Save and add another
              </Button>
                
              <Button variant="contained" color="primary" type="submit" onClick={handleQuestionWasSubmitted}>
                Save and back
              </Button>
            </Box>
            {radioTracker === -1 ? (
              <Typography color="red">
                Remember to mark a correct answer!
              </Typography>
            ) : null}
            {answerError && (
              <Typography color="red">
                Answer fields are required, please delete if not using
              </Typography>
            )}
          </Box>
        </Stack>
      </form>
    </>
  );
}

export default CreateMCQuestion;