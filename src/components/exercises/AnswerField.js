import React from 'react';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";


function AnswerField(props) {
    return (
        <TextField
            size="medium"
            sx={{ backgroundColor: "theme.gray" }}
            placeholder={"eg. how to write an if statement"}
          ></TextField>
    )
}

export default AnswerField;
