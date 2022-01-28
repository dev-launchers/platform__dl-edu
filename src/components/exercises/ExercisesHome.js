import React, { useState } from "react";
import ReactDOM from "react-dom";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import ScrollToTop from "../ScrollToTop";
import BackgroundModal from "../BackgroundModal";
import CreateMCQuestion from "./CreateMCQuestion";
import CreateTFQuestion from "./CreateTFQuestion";
import CreatedExercisesPreview from "./CreatedExercisesPreview";

const TITLES = [
  { title: "Multiple Choice" },
  { title: "True or False" },
];

function ExercisesHome(props) {
  const [showCreateMenu, setShowCreateMenu] = useState(false);
  const [questionType, setQuestionType] = useState("");

  function userSubmittedQuestion(question) {
    let tempArray;
    //add question to the pertinent exercise array
    if (question.answers == null) {
      tempArray = props.userQuestions[0].questions.slice();
      tempArray.push(question);
      props.userSubmittedQuestion(question)
    } else {
      tempArray = props.userQuestions[1].questions.slice();
      tempArray.push(question);
      props.userSubmittedQuestion(question)
    }
    //if user wants to add another question
    if (question.addAnother) {
      //close modal, open modal, ie, reset the form for the next question
      setShowCreateMenu(false);
      setTimeout(function handleAddAnother() {
        setShowCreateMenu(true);
        ScrollToTop();
      }, 100);
    } else {
      document.body.style.overflow = "visible"
      setShowCreateMenu(false);
      ScrollToTop();
    }
  }
  function handleModalWasOpened(type) {
    document.body.style.overflow = "hidden"
    console.log(type);
    setQuestionType(type);
    setShowCreateMenu(true);
    ScrollToTop();
  }
  function handleModalWasClosed() {
    document.body.style.overflow = "visible"
    setShowCreateMenu(false);
  }

  function handleUserFinishedCreatingQuestions() {
    document.body.style.overflow = "visible"
    props.advanceToNextTab();
    ScrollToTop();
  }
  return (
    <Box>
      {showCreateMenu &&
        <>
          {ReactDOM.createPortal(
            <BackgroundModal
              modalIsOpen={showCreateMenu}
              closeModal={handleModalWasClosed}
            />,
            document.getElementById("background-modal")
          )}
          {questionType === "Multiple Choicez" ? ReactDOM.createPortal(
            <CreateMCQuestion
              onClose={handleModalWasClosed}
              userSubmittedQuestion={userSubmittedQuestion}
            />,
            document.getElementById("description-modal")
          )
           : ReactDOM.createPortal(
            <CreateTFQuestion
              onClose={handleModalWasClosed}
              userSubmittedQuestion={userSubmittedQuestion}
            />,
            document.getElementById("description-modal")
          )}
        </>
      }
      <Stack spacing={2}>
        {TITLES.map((title, index) => {
          return (
            <Box key={index} display="flex" flexDirection="column">
              <Box display="flex" alignItems="center">
                <Typography variant="h3" margin="10px">
                  {title.title}
                </Typography>
                <Button
                  color="dark"
                  onClick={() => handleModalWasOpened(TITLES[index].title)}
                >
                  <AddIcon fontSize="large" />
                </Button>
              </Box>
              {index === 0 ? (
                <CreatedExercisesPreview questionInformation={props.userQuestions[0].questions} />
              ) : (
                <CreatedExercisesPreview questionInformation={props.userQuestions[1].questions} />
              )}
            </Box>
          );
        })}
        {props.userQuestions[0].questions.length > 0 || props.userQuestions[1].questions.length > 0 ? (
          <Button
            color="brightBlue"
            variant="contained"
            sx={{ width: "25%" }}
            onClick={handleUserFinishedCreatingQuestions}
          >
            All set!
          </Button>
        ) : null}
      </Stack>
    </Box>
  );
}

export default ExercisesHome;
