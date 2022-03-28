import React, { useState, useEffect } from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/material";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import EmbeddedIDE from "../components/EmbeddedIDE";

import { useParams } from "react-router-dom";
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

const StyledTab = styled(Tab)({
  color: "#ababab",
  backgroundColor: "#222222",
  "&.Mui-selected": { color: "white" },
});

const StyledTabs = styled(Tabs)({
  "& .MuiBox-root": { padding: "0px" },
});
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
      <StyledTab
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
            <StyledTabs
              value={value}
              onChange={handleChange}
              aria-label="module tabs"
              TabIndicatorProps={{ style: { background: "transparent" } }}
            >
              {learnTabValues}
            </StyledTabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div className={classes.learningModuleHeader}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Typography variant="h3" color="#ffffff">
                  {moduleDatum.title}
                </Typography>
              </Box>
              <div className={classes.lmLeftcolumn}>
                <ReactMarkdown
                  children={moduleDatum.markdown}
                  rehypePlugins={[rehypeHighlight]}
                ></ReactMarkdown>
              </div>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  padding: "40px",
                }}
              >
                <Button
                  onClick={() => {
                    setValue(1);
                  }}
                  variant="filled"
                  sx={{
                    backgroundColor: "secondary.main",
                    color: "#ffffff",
                    "&:hover": {
                      backgroundColor: "secondary.main",
                      color: "#ffffff",
                    },
                  }}
                >
                  Go to engagement section
                </Button>
              </Box>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} className={classes.tabPanels}>
            <div style={{ marginTop:"-23px", display: "flex", height: "800px", flexDirection:"column", padding:"40px", backgroundColor:"#262626" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                mb:"10px"
              }}
            >
              <Typography variant="h3" color="#ffffff">
                {moduleDatum.title}
              </Typography>
            </Box>
              <div className={classes.lmRightcolumn}>
                <EmbeddedIDE
                  embedURL={moduleDatum.embeddedIDEURL}
                  customIFrameStyle={moduleDatum.embedIDEStyle}
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} className={classes.tabPanels}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Typography variant="h3" color="#ffffff">
                {moduleDatum.title}
              </Typography>
            </Box>
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
