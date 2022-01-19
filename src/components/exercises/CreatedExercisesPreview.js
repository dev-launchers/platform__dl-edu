import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import CheckIcon from "@mui/icons-material/Check";

function CreatedExercisesPreview(props) {
  return (
    <>
      {props.questionInformation.length > 0 ? (
        <Stack>
          {props.questionInformation.map((question) => {
            return (
              <Box key={Math.random()}>
                <Typography variant="h5" sx={{ mb: "10px" }}>
                  {question.title}
                </Typography>
                <Typography paragraph>Answers</Typography>
                {question.answers.map((answer, index) => {
                  return (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "#ebebeb",
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
                        }}
                      >
                        {String.fromCharCode(65 + index)}
                      </Typography>
                      <Typography paragraph sx={{ margin: "5px" }}>
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
        <Typography paragraph color="gray" margin="25px">
          It's empty here! Add some exercises by clicking “+”
        </Typography>
      )}
    </>
  );
}

export default CreatedExercisesPreview;
