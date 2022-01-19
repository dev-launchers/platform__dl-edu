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
  const [mCQuestions, setMCQuestions] = useState([]);
  const [tFQuestions, setTFQuestions] = useState([]);

  function userSubmittedQuestion(question) {
    let tempArray;
    //add question to the pertinent exercise array
    if (question.answerQuantity === 2) {
      tempArray = tFQuestions.slice();
      tempArray.push(question);
      setTFQuestions(tempArray);
    } else {
      tempArray = mCQuestions.slice();
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
    console.log(mCQuestions);
    console.log(tFQuestions);
  }
  function handleModalWasOpened(type) {
    setQuestionType(type);
    setShowCreateMenu(true);
    ScrollToTop();
  }
  function handleModalWasClosed() {
    setShowCreateMenu(false);
  }

  function handleUserFinishedCreatingQuestions() {
    props.advanceToNextTab();
    ScrollToTop();
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
        {TITLES.map((title, index) => {
          return (
            <Box display="flex" flexDirection="column">
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
                <CreatedExercisesPreview questionInformation={mCQuestions} />
              ) : (
                <CreatedExercisesPreview questionInformation={tFQuestions} />
              )}
            </Box>
          );
        })}
        {tFQuestions.length > 0 || mCQuestions.length > 0 ? (
          <Button
            color="brightBlue"
            variant="contained"
            sx={{ width: "25%" }}
            onClick={handleUserFinishedCreatingQuestions}
          >
            Next slide
          </Button>
        ) : null}
      </Stack>
    </Container>
  );
}

export default ExercisesHome;
