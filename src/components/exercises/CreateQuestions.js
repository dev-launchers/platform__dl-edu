import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";

import classes from "./CreateQuestions.module.css";
import AnswerField from "./AnswerField";

function CreateQuestions(props) {
  const answerFieldQuantity =
    props.questionType === "True or False Questions" ? 2 : 3;

  const answerFieldArray = [];
  const moreAnswersButton =
    answerFieldQuantity === 2 ? null : <Button>Add more answers</Button>;

  for (let i = 0; i < answerFieldQuantity; i++) {
    answerFieldArray.push(<AnswerField />);
  }
  function handleQuestionWasSubmitted(event) {
    event.preventDefault();
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
            <DeleteIcon sx={{ mr: "10px" }} color="gray" fontSize="small" />
          </Typography>
          <TextField
            size="medium"
            sx={{ backgroundColor: "theme.gray" }}
            placeholder="eg. how to write an if statement"
          ></TextField>
          <Typography paragraph>Answers</Typography>
          {answerFieldArray}
          <Box display="flex" justifyContent="space-evenly" flexDirection="column" alignItems="flex-start" height="105px">
            {moreAnswersButton}
            <Box width="50%" display="flex" justifyContent="space-evenly">
              <Button variant="contained" type="submit">
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
