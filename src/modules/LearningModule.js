import React, { useState, useEffect } from "react";
import Markdown from "../components/Markdown";
import EmbeddedIDE from "../components/EmbeddedIDE";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import "./LearningModule.css";
import "highlight.js/styles/base16/zenburn.css";
import "./LearningModule.css";
import ModuleData from "../data/ModuleData";
import TabPanel from "../components/TabPanel";
import allyProps from "../components/allyProps";
import DUMMY_TEXT from "../data/placeholdertext";

const cache = createCache({
  key: "css",
  prepend: true,
});

function LearningModule(props) {
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <CacheProvider value={cache}>
        <Link
          className="back-button"
          to={`/main-content/learning-modules/${moduleDirector}`}
        >
          <Button>
            <ArrowBack /> Back
          </Button>
        </Link>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ display:"flex", justifyContent: "flex-end", marginRight:"100px" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="module tabs"
              textColor="dark"
            >
              <Tab label="Guide" className="tab-box"  {...allyProps(0)} />
              <Tab label="Engagement" className="tab-box" {...allyProps(1)} />
              <Tab label="Exercises" className="tab-box" {...allyProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0} className="tab-panels">
            <div className="learning-module-header">
              <div className="lm-leftcolumn">
                <Markdown markdown={moduleDatum.markdown} canEdit={true}/>
                <Typography paragraph>{DUMMY_TEXT}</Typography>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} className="tab-panels">
            <div style={{ display: "flex", height: "800px" }}>
              <div className="lm-rightcolumn">
                <EmbeddedIDE
                  embedURL={moduleDatum.embeddedIDEURL}
                  customIFrameStyle={moduleDatum.embedIDEStyle}
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} className="tab-panels">
            <Typography paragraph>{DUMMY_TEXT}</Typography>
          </TabPanel>
        </Box>
      </CacheProvider>
    </>
  );
}

export default LearningModule;
