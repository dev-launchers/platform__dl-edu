import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import EmbeddedIDE from "../components/EmbeddedIDE/EmbeddedIDE";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";

import classes from "./LearningModuleHome.module.css";
import "highlight.js/styles/base16/zenburn.css";
import TabPanel from "../components/tabhelpers/TabPanel";
import allyProps from "../components/tabhelpers/allyProps";
import ExercisesHome from "../components/exercises/ExercisesHome";

const cache = createCache({
  key: "css",
  prepend: true,
});
const TABVALUES = [
  { index: 0, title: "Guide" },
  { index: 1, title: "Engagement" },
  { index: 2, title: "Exercises" },
];
const learnTabValues = TABVALUES.map((tab) => {
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
function LearningModuleLearn(props) {
  //dynamically route user back to module starting point
  const [moduleDirector, setModuleDirector] = useState("");
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <CacheProvider value={cache}>
        <Box sx={{ width: "100%" }}>
          <Box className={classes.tabsContainer}>
          <Tabs
          value={value}
          onChange={handleChange}
          aria-label="module tabs"
          TabIndicatorProps={{ style: { background: "transparent" } }}
        >
          {learnTabValues}
        </Tabs>
          </Box>
          <TabPanel value={value} index={0} className={classes.tabPanels}>
            <div className={classes.learningModuleHeader}>
              <div className={classes.lmLeftcolumn}>
                <ReactMarkdown
                  children={props.moduleDatum.markdown}
                  rehypePlugins={[rehypeHighlight]}
                ></ReactMarkdown>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} className={classes.tabPanels}>
            <div style={{ display: "flex", height: "800px" }}>
              <div className={classes.lmRightcolumn}>
                <EmbeddedIDE
                  embedURL={props.moduleDatum.embeddedIDEURL}
                  customIFrameStyle={props.moduleDatum.embedIDEStyle}
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} className={classes.tabPanels}>
            <>
              <h1>Here are the exercises!</h1>
            </>
          </TabPanel>
        </Box>
      </CacheProvider>
    </>
  );
}

export default LearningModuleLearn;
