import React, { useState, useEffect } from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import EmbeddedIDE from "../components/EmbeddedIDE/EmbeddedIDE";

import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import classes from "./LearningModuleHome.module.css";
import TabPanel from "../components/tabhelpers/TabPanel";
import allyProps from "../components/tabhelpers/allyProps";
import "highlight.js/styles/base16/zenburn.css";
import ModuleData from "../data/ModuleData";

const cache = createCache({
  key: "css",
  prepend: true,
});
const TABVALUES = [
  { index: 0, title: "Guide" },
  { index: 1, title: "Engagement" },
  { index: 2, title: "Exercises" },
];
function LearningModuleHome(props) {
  //dynamically route user back to module starting point
  const [moduleDirector, setModuleDirector] = useState("");
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const params = useParams();
  // TODO replace by API call once we have a back-end
  const checkParams = params.moduleId;
  const moduleDatum = ModuleData.find((data) => data.id == params.moduleId);

  //back button logic here
  useEffect(() => {
    if (checkParams < 8) {
      setModuleDirector("javascript");
    } else if (checkParams == 8) {
      setModuleDirector("java");
    } else {
      setModuleDirector("csharp");
    }
  }, [checkParams]);

  const learnTabValues = TABVALUES.map((tab) => {
    return (
      <Tab
        label={tab.title}
        disableRipple
        {...allyProps(tab.index)}
        key={tab.index}
      />
    );
  });
  return (
    <>
      <CacheProvider value={cache}>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <Button
            endIcon={<ArrowBack />}
            href={`/main-content/learning-modules/${moduleDirector}`}
          >
            Back
          </Button>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box className={classes.tabsContainer}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="module tabs"
            >
              {learnTabValues}
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div className={classes.learningModuleHeader}>
              <div className={classes.lmLeftcolumn}>
                <ReactMarkdown
                  children={moduleDatum.markdown}
                  rehypePlugins={[rehypeHighlight]}
                ></ReactMarkdown>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} className={classes.tabPanels}>
            <div style={{ display: "flex", height: "800px" }}>
              <div className={classes.lmRightcolumn}>
                <EmbeddedIDE
                  embedURL={moduleDatum.embeddedIDEURL}
                  customIFrameStyle={moduleDatum.embedIDEStyle}
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

export default LearningModuleHome;
