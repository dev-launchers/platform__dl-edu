import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import EmbeddedIDE from "../components/EmbeddedIDE/EmbeddedIDE";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import classes from "./LearningModuleHome.module.css";
import "highlight.js/styles/base16/zenburn.css";
import ModuleData from "../data/ModuleData";
import TabPanel from "../components/tabhelpers/TabPanel";
import allyProps from "../components/tabhelpers/allyProps";
import ExercisesHome from "../components/exercises/ExercisesHome";
import ModuleBuilderIntroduction from "../components/modulebuilder/ModuleBuilderIntroduction";
import Handoff from "../components/modulebuilder/Handoff";

const cache = createCache({
  key: "css",
  prepend: true,
});
const TABVALUES = [ { index:1, title:"Guide" },{ index:2, title:"Engagement" },{ index:3, title:"Exercises" },{ index:4, title:"Handoff" },];

function LearningModuleBuild(props) {
  //dynamically route user back to module starting point
  const [moduleDirector, setModuleDirector] = useState("");
  const [value, setValue] = useState(0);

  const params = useParams();
  // TODO replace by API call once we have a back-end
  const moduleDatum = ModuleData.find((data) => data.id == params.moduleId);
  const checkParams = params.moduleId;

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

  const mappedTabValues = TABVALUES.map(tab => {
    return(
      <Tab label={tab.title} disableRipple className={classes.tabBox} {...allyProps(tab.index)} key={tab.index} />
    )
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <CacheProvider value={cache}>
        <Link
          className={classes.backButton}
          to={`/main-content/learning-modules/${moduleDirector}`}
        >
          <Button>
            <ArrowBack /> Back
          </Button>
        </Link>
        <Box sx={{ width: "100%" }}>
          <Box className={classes.tabsContainer}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="module tabs"
              TabIndicatorProps={{style: {background:'transparent'}}}
            >
              <Tab label="Introduction" disableRipple autoFocus className={classes.tabBox} {...allyProps(0)} />
              {mappedTabValues}
            </Tabs>
          </Box>
          <Box border="1px solid black"><TabPanel value={value} index={0} className={classes.tabPanels}>
            <ModuleBuilderIntroduction />
          </TabPanel>
          <TabPanel value={value} index={1} className={classes.tabPanels}>
            <div className={classes.learningModuleHeader}>
              <div className={classes.lmLeftcolumn}>
                <ReactMarkdown
                  children={moduleDatum.markdown}
                  rehypePlugins={[rehypeHighlight]}
                ></ReactMarkdown>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} className={classes.tabPanels}>
            <div style={{ display: "flex", height: "800px" }}>
              <div className={classes.lmRightcolumn}>
                <EmbeddedIDE
                  embedURL={moduleDatum.embeddedIDEURL}
                  customIFrameStyle={moduleDatum.embedIDEStyle}
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3} className={classes.tabPanels}>
            <ExercisesHome />
          </TabPanel>
          <TabPanel value={value} index={4} className={classes.tabPanels}>
            <Handoff />
          </TabPanel></Box>
        </Box>
      </CacheProvider>
    </>
  );
}

export default LearningModuleBuild;
