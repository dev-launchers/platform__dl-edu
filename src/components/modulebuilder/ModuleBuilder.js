import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import TabPanel from "../tabhelpers/TabPanel";
import allyProps from "../tabhelpers/allyProps";

import classes from "./ModuleBuilder.module.css";
import ModuleBuilderIntroduction from "./ModuleBuilderIntroduction";
import Engagement from "./Engagement";
import Guide from "./Guide";
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
  const [userUrl, setUserUrl] = useState("");
  const [questionTracker, setQuestionTracker] = useState([
    { questions: [] },
    { questions: [] },
  ]);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function advanceToNextTab() {
    setValue(oldValue => oldValue + 1);
  };
  function handleUserSumbittedUrl(url) {
    console.log(url);
    setUserUrl(url);
    setValue(oldValue => oldValue + 1);
  }
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
      url:userUrl,
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
        {/* <Guide /> */}
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabPanels}>
        <Engagement userSumbittedUrl={handleUserSumbittedUrl} />
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
