import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import TabPanel from "../tabhelpers/TabPanel";
import EmbeddedIDE from "../EmbeddedIDE/EmbeddedIDE";
import allyProps from "../tabhelpers/allyProps";

import classes from "./ModuleBuilder.module.css";
import ModuleBuilderIntroduction from "./ModuleBuilderIntroduction";
import ExercisesHome from "../exercises/ExercisesHome";
import Handoff from "./Handoff";

const TABVALUES = [
  { index: 0, title: "Introduction" },
  { index: 1, title: "Guide" },
  { index: 2, title: "Engagement" },
  { index: 3, title: "Exercises" },
  { index: 4, title: "Handoff" },
];

const buildTabValues = TABVALUES.map((tab) => {
  return (
    <Tab
      label={tab.title}
      disableRipple
      {...allyProps(tab.index)}
      key={tab.index}
    />
  );
});
function ModuleBuilder(props) {
  const [questionTracker, setQuestionTracker] = useState([
    { questions: [] },
    { questions: [] },
  ]);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const advanceToNextTab = () => {
    const userPage = value;
    setValue(userPage + 1);
  };
  function handleUserSubmittedQuestion(question) {
    //decide if multiple choice
    if (question.answerQuantity === 2) {
      const tmp = questionTracker.slice();
      tmp[0].questions.push(question);
      setQuestionTracker(tmp);
      return;
    } else {
      const tmp = questionTracker.slice();
      tmp[1].questions.push(question);
      setQuestionTracker(tmp);
      return;
    }
  }

  function handleUserSubmittedModule(module) {
    const userModuleData = {
      moduleData: module,
      questions: questionTracker,
    };
    //take all user created data and send it to back-end with fetch, axios, etc.
    console.log(userModuleData);
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box className={classes.tabsContainer}>
        <Tabs value={value} onChange={handleChange} aria-label="module tabs">
          {buildTabValues}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} className={classes.tabPanels}>
        <ModuleBuilderIntroduction advanceToNextTab={advanceToNextTab} />
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabPanels}>
        <Typography variant="h5">
          Write your guide here or <Link>add your own</Link>
        </Typography>
        <Button
          variant="contained"
          color="brightBlue"
          onClick={advanceToNextTab}
        >
          Save
        </Button>
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabPanels}>
        <div style={{ display: "flex", height: "800px" }}>
          <div className={classes.lmRightcolumn}></div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3} className={classes.tabPanels}>
        <ExercisesHome
          advanceToNextTab={advanceToNextTab}
          userSubmittedQuestion={handleUserSubmittedQuestion}
          userQuestions={questionTracker}
        />
      </TabPanel>
      <TabPanel value={value} index={4} className={classes.tabPanels}>
        <Handoff userSubmittedModule={handleUserSubmittedModule} />
      </TabPanel>
    </Box>
  );
}

export default ModuleBuilder;
