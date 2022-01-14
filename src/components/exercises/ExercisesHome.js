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

const exerciseTitles = ["Multiple Choice Questions", "True or False Questions"];

function ExercisesHome() {
  const [showCreateMenu, setShowCreateMenu] = useState(false);
  const [questionType, setQuestionType] = useState("");
  const [mCQuestions, setMCQuestions] = useState([]);
  const [tFQuestions, setTFQuestions] = useState([]);

  function userSubmittedQuestion(question) {
    let tempArray;
    //add question to the pertinent exercise array
    if (question.questionQuantity === 2) {
      tempArray = tFQuestions;
      tempArray.push(question);
      setTFQuestions(tempArray);
    } else {
      tempArray = mCQuestions;
      tempArray.push(question);
      setMCQuestions(tempArray);
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
      setShowCreateMenu(false);
      ScrollToTop();
    }
  }
  function handleModalWasOpened(type) {
    setQuestionType(type);
    setShowCreateMenu(true);
    ScrollToTop();
    if (type === "True or False Questions") {
      document.body.style.overflow = "hidden";
    }
  }
  function handleModalWasClosed() {
    setShowCreateMenu(false);
    document.body.style.overflow = "unset";
  }

  return (
    <Container>
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
              closeMenu={handleModalWasClosed}
              userSubmittedQuestion={userSubmittedQuestion}
            />,
            document.getElementById("description-modal")
          )}
        </>
      ) : null}
      <Stack spacing={2}>
        {exerciseTitles.map((exercise, index) => {
          return (
            <Box key={index} display="flex" flexDirection="column">
              <Box display="flex" alignItems="center">
                <Typography variant="h3" margin="10px">
                  {exercise}
                </Typography>
                <Button
                  color="dark"
                  onClick={() => handleModalWasOpened(exercise)}
                >
                  <AddIcon fontSize="large" />
                </Button>
              </Box>
              {index === 0 && mCQuestions.length > 0 ? (
                <h3>{mCQuestions[0].title}</h3>
              ) : index === 1 && tFQuestions.length > 0 ? (
                <h3>{tFQuestions[0].title}</h3>
              ) : (
                <Typography paragraph color="gray" margin="25px">
                  It's empty here! Add some exercises by clicking “+”
                </Typography>
              )}
            </Box>
          );
        })}
      </Stack>
    </Container>
  );
}

export default ExercisesHome;
