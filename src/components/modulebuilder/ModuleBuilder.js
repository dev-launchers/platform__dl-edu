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
      className={classes.tabBox}
      {...allyProps(tab.index)}
      key={tab.index}
    />
  );
});
function ModuleBuilder(props) {

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const advanceToNextTab = () => {
    const userPage = value;
    setValue(userPage + 1);
  }
  return (
    <Box sx={{ width: "100%" }}>
      <Box className={classes.tabsContainer}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="module tabs"
          TabIndicatorProps={{ style: { background: "transparent" } }}
        >
          {buildTabValues}
        </Tabs>
      </Box>
      <Box border="1px solid black">
        <TabPanel value={value} index={0} className={classes.tabPanels}>
          <ModuleBuilderIntroduction advanceToNextTab={advanceToNextTab}/>
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.tabPanels}>
          <Typography variant="h5">Write your guide here or <Link>add your own</Link></Typography>
          <Button variant="contained" color="brightBlue" onClick={advanceToNextTab}>Save</Button>
        </TabPanel>
        <TabPanel value={value} index={2} className={classes.tabPanels}>
          <div style={{ display: "flex", height: "800px" }}>
            <div className={classes.lmRightcolumn}>
              <EmbeddedIDE
                embedURL={props.moduleDatum.embeddedIDEURL}
                customIFrameStyle={props.moduleDatum.embedIDEStyle}
              />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3} className={classes.tabPanels}>
          <ExercisesHome />
        </TabPanel>
        <TabPanel value={value} index={4} className={classes.tabPanels}>
          <Handoff />
        </TabPanel>
      </Box>
    </Box>
  );
}

export default ModuleBuilder;
