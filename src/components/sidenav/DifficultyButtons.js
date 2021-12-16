import react from "react";
import { CssBaseline } from "@mui/material";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const ButtonDescriptions = [
  {
    difficulty: "Beginner",
    linkTo: "/main-content/learning-module/filter-by=beginner",
  },
  {
    difficulty: "Intermediate",
    linkTo: "/main-content/learning-module/filter-by=intermediate",
  },
  {
    difficulty: "Advanced",
    linkTo: "/main-content/learning-module/filter-by=advanced",
  },
];

function DifficultyButtons(props) {
  return (
    <>
      <CssBaseline />
      <List component="div" disablePadding>
        <ListItem>Difficulty</ListItem>
        <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
          {ButtonDescriptions.map((item, index) => {
            return (
              <Button
                key={index}
                variant="contained"
                color="gray"
                size="small"
                component={NavLink}
                to={item.linkTo}
                onClick={props.difficultyWasSelected}
              >
                {item.difficulty}
              </Button>
            );
          })}
        </ListItem>
      </List>
    </>
  );
}

export default DifficultyButtons;
