import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import CheckIcon from "@mui/icons-material/Check";

function CreatedExercisesPreview(props) {
  return (
    <>
      {props.questionInformation.length > 0 ? (
        <Stack sx={{ ml:"12px" }}>
          {props.questionInformation.map((question) => {
            return (
              <Box key={Math.random()}>
                <Typography variant="h5" sx={{ mb: "10px", color:"neutral.main" }}>
                  {question.title}
                </Typography>
                {question.answers.map((answer, index) => {
                  return (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#464646",
                        borderRadius: "2%",
                        mb: "10px",
                        padding: "10px",
                        width: "50%",
                      }}
                    >
                      <Typography
                        paragraph
                        sx={{
                          fontWeight: "800",
                          margin: "5px",
                          mr: "10px",
                          color:"neutral.main"
                        }}
                      >
                        {String.fromCharCode(65 + index)}
                      </Typography>
                      <Typography paragraph sx={{ margin: "5px", color:"neutral.main" }}>
                        {answer.answer}
                      </Typography>
                      {index == question.isCorrectAnswer ? (
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            width: "100%",
                          }}
                        >
                          {" "}
                          <CheckIcon sx={{ color: "green" }} />
                        </Box>
                      ) : null}
                    </Box>
                  );
                })}
              </Box>
            );
          })}
        </Stack>
      ) : (
        <Typography paragraph margin="25px" sx={{ color:"#c9c9c9"}}>
          It's empty here! Add some exercises by clicking “+”
        </Typography>
      )}
    </>
  );
}

export default CreatedExercisesPreview;
