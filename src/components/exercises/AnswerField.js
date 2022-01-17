import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import Box from "@mui/material/Box";

import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

function AnswerField(props) {
  const [userAnswer, setUserAnswer] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState(0);

  function handleChangeRadioAnswer(event) {
    setSelectedAnswer(event.target.value);
  }
  
  function handleUserTypedAnswer(event) {
      const typedAnswer = event.target.value
      setUserAnswer(typedAnswer);
      props.handleUserTypedAnswer(typedAnswer, props.id);
  }
  //for validation
  function handleUserFinishedTypingAnswer(event) {
    
    /* const temporaryUserAnswer = event.target.value;
    setUserAnswer(temporaryUserAnswer); */
  }
  function handleUserRemovedAnswer(index) {
    props.handleUserRemovedAnswerField(index, userAnswer);
  }

  return (
    <Box sx={{ display: "flex", margin: "10px" }}>
      <TextField
        size="medium"
        sx={{ backgroundColor: "#EBEBEB", width: "60%" }}
        placeholder="eg. how to write an if statement"
        onBlur={handleUserFinishedTypingAnswer}
        onChange={handleUserTypedAnswer}
        value={props.answer}
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
          checked={selectedAnswer == props.answer}
          onChange={handleChangeRadioAnswer}
          value={props.id}
          name="correct-answer-buttons"
          inputProps={{ "aria-label": props.id }}
          icon={<CheckBoxOutlineBlankIcon />}
          checkedIcon={<CheckBoxIcon />}
          sx={{ height: "16px", width: "16px" }}
        />
        <Typography>Mark as correct answer</Typography>
        <DeleteIcon
          sx={{ cursor: "pointer" }}
          onClick={() => handleUserRemovedAnswer(props.id)}
        />
      </Box>
    </Box>
  );
}

export default AnswerField;
