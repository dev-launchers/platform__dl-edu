import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import CheckIcon from '@mui/icons-material/Check';

function CreatedExercisesPreview(props) {
  props.questionInformation;
  return (
    <Stack>
      {props.questionInformation.map((question) => {
        return (
          <>
            <Typography variant="h5">{question.title}</Typography>
            <Typography paragraph>Answers</Typography>
            {question.answers.map((answer, index) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    alignItems:"center",
                    backgroundColor: "#ebebeb",
                    mb: "5px",
                    width: "50%",
                  }}
                >
                  <Typography
                    paragraph
                    sx={{
                      fontWeight: "800",
                      margin: "5px",
                      mr:"10px"
                    }}
                  >
                    {String.fromCharCode(65 + index)}
                  </Typography>
                  <Typography paragraph sx={{ margin:"5px" }}>{answer.answer}</Typography>
                  {answer.isCorrectAnswer ? <CheckIcon sx={{ color:"theme.success" }}/> : null}
                </Box>
              );
            })}
          </>
        );
      })}
    </Stack>
  );
}

export default CreatedExercisesPreview;
