import React, { useState } from 'react';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";


function AnswerField(props) {
    const [userAnswer, setUserAnswer] = useState("");
    if(props.resetAnswerText){
        setUserAnswer("");
    }
    function handleUserTypedAnswer(event){
        const temporaryUserAnswer = event.target.value;
        setUserAnswer(temporaryUserAnswer);
    }
    return (
        <TextField
            size="medium"
            sx={{ backgroundColor: "theme.gray" }}
            placeholder={"eg. how to write an if statement"}
            onChange={handleUserTypedAnswer}
            value={userAnswer}
          ></TextField>
    )
}

export default AnswerField;
