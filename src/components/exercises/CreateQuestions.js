import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";

import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import AddIcon from '@mui/icons-material/Add';
import classes from "./CreateQuestions.module.css";

function CreateQuestions(props) {
  const [title, setTitle] = useState("");
  const [addAnother, setAddAnother] = useState(false);
  const [answerFieldQuantity, setAnswerFieldQuantity] = useState(
    props.questionType === "True or False Questions" ? 2 : 3
  );
  const [selectedAnswer, setSelectedAnswer] = useState(0);

  function handleChangeRadioAnswer(event) {
    setSelectedAnswer(event.target.value);
  };

  let answerFields = [];
  for (let i = 0; i < answerFieldQuantity; i++) {
    answerFields.push(
      <Box sx={{ display: "flex", margin:"10px" }}>
        <TextField
          size="medium"
          sx={{ backgroundColor: "#EBEBEB", width: "60%" }}
          placeholder="eg. how to write an if statement"
          InputProps={{
            startAdornment: (
              <Typography
                paragraph
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "800",
                  margin: "auto",
                  mr: "10px",
                }}
              >
                {String.fromCharCode(65 + i)}
              </Typography>
            ),
          }}
        />
        <Box
          sx={{
            width: "40%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Radio
            checked={selectedAnswer == i}
            onChange={handleChangeRadioAnswer}
            value={i}
            name="correct-answer-buttons"
            inputProps={{ "aria-label": i }}
            icon={<CheckBoxOutlineBlankIcon />}
            checkedIcon={<CheckBoxIcon />}
            sx={{ height:"16px", width:"16px" }}
          />
          <Typography>Mark as correct answer</Typography>
          <DeleteIcon sx={{cursor:"pointer"}} onClick={() => handleUserRemovedAnswer(i)}/>
        </Box>
      </Box>
    );
  }

  //show "add more answers button if the question is MC"
  const moreAnswersButton =
    props.questionType === "True or False Questions" ? null : (
      <Button startIcon={<AddIcon />} variant="outlined" color="gray" onClick={handleUserAddedQuestion}>Add more answers</Button>
    );

    function handleUserClickedInfoButton() {
      window.alert("Testing!");
    }
  function handleUserChandedTitle(event) {
    event.preventDefault();
    setTitle(event.target.value);
  }
  function handleUserAddedQuestion() {
    //user can create no more than 6 answers
    if (answerFieldQuantity < 6) {
      const updatedAnswerQuantity = answerFieldQuantity + 1;
      setAnswerFieldQuantity(updatedAnswerQuantity);
    }
  }
  function handleUserRemovedAnswer(index) {
    console.log(index)
    answerFields = answerFields.splice(index, 1);
    setAnswerFieldQuantity(oldAnswerQuantity => oldAnswerQuantity - 1);
  }
  function handleQuestionWasSubmitted(event) {
    event.preventDefault();
    const userQuestion = {
      addAnother: addAnother,
      questionQuantity: answerFieldQuantity,
      title: event.target[0].value,
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
            <InfoIcon sx={{ mr: "10px", ml: "10px" }} fontSize="small" sx={{ cursor:"pointer" }} onClick={handleUserClickedInfoButton} />
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
            {answerFields}
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
