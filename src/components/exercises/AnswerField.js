import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import Box from "@mui/material/Box";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

function AnswerField(props) {
  const [userAnswer, setUserAnswer] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState(-2);

  function handleChangeRadioAnswer(event) {
    setSelectedAnswer(event.target.value);
    props.userSelectedCorrectAnswer(event.target.value);
  }

  function handleUserTypedAnswer(event) {
    const typedAnswer = event.target.value;
    setUserAnswer(typedAnswer);
  }
  function handleUserFinishedTypingAnswer() {
    props.handleUserTypedAnswer(userAnswer, props.id);
  }

  return (
    <Box sx={{ display: "flex", margin: "10px" }}>
      <TextField
        size="medium"
        sx={{ backgroundColor: "#EBEBEB", width: "60%" }}
        placeholder="eg. If condition: action "
        onBlur={handleUserFinishedTypingAnswer}
        onChange={handleUserTypedAnswer}
        value={userAnswer}
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
              {String.fromCharCode(65 + props.id)}
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
          checked={selectedAnswer === props.radioIndex}
          onChange={handleChangeRadioAnswer}
          value={props.id}
          name="correct-answer-buttons"
          inputProps={{ "aria-label": props.id }}
          icon={<CheckBoxOutlineBlankIcon />}
          checkedIcon={<CheckBoxIcon />}
          sx={{ height: "16px", width: "16px" }}
        />
        <Typography>Mark as correct answer</Typography>
      </Box>
    </Box>
  );
}

export default AnswerField;
