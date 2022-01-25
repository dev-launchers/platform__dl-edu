import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import AddIcon from "@mui/icons-material/Add";
import classes from "./CreateQuestions.module.css";
import AnswerField from "./AnswerField";

function CreateQuestions(props) {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [answerError, setAnswerError] = useState(false);
  const [addAnother, setAddAnother] = useState(false);
  const [radioTracker, setRadioTracker] = useState(-1);
  const [answerFieldQuantity, setAnswerFieldQuantity] = useState(
    props.questionType === "True or False Questions" ? 2 : 3
  );
  const [answerFields, setAnswerFields] = useState(
    answerFieldQuantity === 3
      ? [
          { id: Math.random(), answer: "" },
          { id: Math.random(), answer: "" },
          { id: Math.random(), answer: "" },
        ]
      : [
          { id: Math.random(), answer: "" },
          { id: Math.random(), answer: "" },
        ]
  );

  //show "add more answers button if the question is MC"
  const moreAnswersButton =
    props.questionType === "True or False Questions" ? null : (
      <Button
        startIcon={<AddIcon />}
        variant="outlined"
        color="gray"
        onClick={handleUserAddedAnswerField}
        sx={{ mb: "10px" }}
      >
        Add more answers
      </Button>
    );

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
    for(let i = 0; i < answerFields.length; i++) {
      if(answerFields[i].answer.length === 0) {
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
          sx={{ overflowY: "scroll", height: "80vh" }}
        >
          <Box width="100%" display="flex" justifyContent="flex-end">
            <CloseIcon
              onClick={props.onClose}
              cursor="pointer"
              fontSize="large"
            />
          </Box>
          <Typography variant="h4">{props.questionType}</Typography>
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
            size="medium"
            sx={{ backgroundColor: "theme.gray" }}
            placeholder="e.g. how to write an if statement"
            onChange={handleUserChandedTitle}
            onBlur={handleValidateTitle}
            value={title}
          />
          <Typography paragraph>Answers</Typography>
          <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
            {props.questionType === "True or False Questions"
              ? answerFields.slice(0, 2).map((answer, index) => {
                  return (
                    <AnswerField
                      key={answer.id}
                      radioIndex={radioTracker}
                      userSelectedCorrectAnswer={
                        handleUserSelectedCorrectAnswer
                      }
                      id={index}
                      handleUserTypedAnswer={handleUserTypedAnswer}
                      answer={answer.answer}
                      isMultipleChoice={true}
                    />
                  );
                })
              : answerFields.map((answer, index) => {
                  return (
                    <AnswerField
                      key={answer.id}
                      radioIndex={radioTracker}
                      userSelectedCorrectAnswer={
                        handleUserSelectedCorrectAnswer
                      }
                      handleUserTypedAnswer={handleUserTypedAnswer}
                      handleUserRemovedAnswerField={
                        handleUserRemovedAnswerField
                      }
                      id={index}
                      answer={answer.answer}
                    />
                  );
                })}
          </Box>

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

export default CreateQuestions;
