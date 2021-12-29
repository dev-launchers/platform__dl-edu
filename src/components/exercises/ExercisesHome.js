import React, { useState } from "react";
import ReactDOM from "react-dom"
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import BackgroundModal from "../BackgroundModal";
import CreateQuestions from "./CreateQuestions";

const exerciseTitles = ["Multiple Choice Questions", "True or False Questions"];

function ExercisesHome() {
  const [showCreateMenu, setShowCreateMenu] = useState(false);
  const [questionType, setQuestionType] = useState("");

  const mappedExercises = exerciseTitles.map((exercise) => {
    return (
      <Box display="flex" flexDirection="column">
        <Box display="flex" alignItems="center">
          <Typography variant="h3" margin="10px">
            {exercise}
          </Typography>
          <Button color="dark" onClick={() => handleModalWasOpened(exercise)}>
            <AddIcon fontSize="large" />
          </Button>
        </Box>
        <Typography paragraph color="gray" margin="25px">
          It's empty here! Add some exercises by clicking “+”
        </Typography>
      </Box>
    );
  });

  function handleModalWasOpened(type) {
    setQuestionType(type)
    setShowCreateMenu(true);
  }
  function handleModalWasClosed() {
    setShowCreateMenu(false);
  }

  return (
    <Container>
      {showCreateMenu
        ? ReactDOM.createPortal(
            <BackgroundModal closeModal={handleModalWasClosed} />,
            document.getElementById("background-modal")
          )
        : null}
    {showCreateMenu
        ? ReactDOM.createPortal(
            <CreateQuestions questionType={questionType} closeMenu={handleModalWasClosed} />,
            document.getElementById("exercise-creator")
          )
        : null}
      <Stack spacing={2}>{mappedExercises}</Stack>
    </Container>
  );
}

export default ExercisesHome;
