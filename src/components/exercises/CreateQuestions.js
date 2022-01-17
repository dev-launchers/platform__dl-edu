import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import AddIcon from "@mui/icons-material/Add";
import classes from "./CreateQuestions.module.css";
import AnswerField from "./AnswerField";
import useForceRender from "../ForceRender";

function CreateQuestions(props) {
  const [title, setTitle] = useState("");
  const [addAnother, setAddAnother] = useState(false);
  const [answerFields, setAnswerFields] = useState([
    { id: Math.random(), answer: "" },
    { id: Math.random(), answer: "" },
    { id: Math.random(), answer: "" },
  ]);
  const [radioTracker, setRadioTracker] = useState(0);
  const [answerFieldQuantity, setAnswerFieldQuantity] = useState(
    props.questionType === "True or False Questions" ? 2 : 3
  );

  //show "add more answers button if the question is MC"
  const moreAnswersButton =
    props.questionType === "True or False Questions" ? null : (
      <Button
        startIcon={<AddIcon />}
        variant="outlined"
        color="gray"
        onClick={handleUserAddedAnswerField}
      >
        Add more answers
      </Button>
    );

  function handleUserClickedInfoButton() {
    window.alert("Testing!");
  }
  function handleUserChandedTitle(event) {
    event.preventDefault();
    setTitle(event.target.value);
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
    console.log(answerFields);
  }

  function handleQuestionWasSubmitted(event) {
    event.preventDefault();
    const userQuestion = {
      addAnother: addAnother,
      answerQuantity: answerFieldQuantity,
      title: title,
      answers: answerFields,
      isCorrectAnswer: radioTracker,
    };
    console.log(userQuestion);
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
            <InfoIcon
              sx={{ mr: "10px", ml: "10px" }}
              fontSize="small"
              sx={{ cursor: "pointer" }}
              onClick={handleUserClickedInfoButton}
            />
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
            placeholder="e.g. how to write an if statement"
            onChange={handleUserChandedTitle}
            value={title}
          ></TextField>
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
          </Box>
        </Stack>
      </form>
    </>
  );
}

export default CreateQuestions;
