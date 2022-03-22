import React from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const ButtonDescriptions = [
  {
    difficulty: "Beginner",
    linkTo: "/main-content/learning-module/filter-by=beginner",
    color:"#C4F1C4",
  },
  {
    difficulty: "Intermediate",
    linkTo: "/main-content/learning-module/filter-by=intermediate",
    color:"#FDECC8",
  },
  {
    difficulty: "Advanced",
    linkTo: "/main-content/learning-module/filter-by=advanced",
    color:"#FFBBAF"
  },
];

function DifficultyButtons(props) {
  return (
    <Stack spacing={1}>
      <label style={{ color: "#ffffff" }}>Difficulty</label>
      <Box sx={{ display: "flex" }}>
        {ButtonDescriptions.map((item, index) => {
          return (
            <Button
              key={index}
              variant="contained"
              size="small"
              component={NavLink}
              to={item.linkTo}
              onClick={props.difficultyWasSelected}
              sx={{ position: "static", fontSize: "10px", mr:"4px", backgroundColor:item.color, color:"#262626" }}
            >
              {item.difficulty}
            </Button>
          );
        })}
      </Box>
    </Stack>
  );
}

export default DifficultyButtons;
