import React, { useState } from "react";
import ReactDOM from "react-dom";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

import ScrollToTop from "../ScrollToTop";
import BackgroundModal from "../BackgroundModal";
import CreateQuestions from "./CreateQuestions";
import CreatedExercisesPreview from "./CreatedExercisesPreview";

const TITLES = [
  { title: "Multiple Choice Questions" },
  { title: "True or False Questions" },
];

function ExercisesHome(props) {
  const [showCreateMenu, setShowCreateMenu] = useState(false);
  const [questionType, setQuestionType] = useState("");

  function userSubmittedQuestion(question) {
    let tempArray;
    console.log(question)
    //add question to the pertinent exercise array
    if (question.answerQuantity === 2) {
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
      {showCreateMenu ? (
        <>
          {ReactDOM.createPortal(
            <BackgroundModal
              modalIsOpen={showCreateMenu}
              closeModal={handleModalWasClosed}
            />,
            document.getElementById("background-modal")
          )}
          {ReactDOM.createPortal(
            <CreateQuestions
              onClose={handleModalWasClosed}
              questionType={questionType}
              userSubmittedQuestion={userSubmittedQuestion}
            />,
            document.getElementById("description-modal")
          )}
        </>
      ) : null}
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
              {index === 1 ? (
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
