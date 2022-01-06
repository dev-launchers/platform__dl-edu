import React, { useState, useEffect } from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Box from "@mui/material/Box";

import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import "highlight.js/styles/base16/zenburn.css";
import LearningModuleLearn from "./LearningModuleLearn";
import ModuleBuilder from "../components/modulebuilder/ModuleBuilder";
import ModuleData from "../data/ModuleData";

const cache = createCache({
  key: "css",
  prepend: true,
});

function LearningModuleHome(props) {
  //dynamically route user back to module starting point
  const [moduleDirector, setModuleDirector] = useState("");
  const [builderMode, setBuilderMode] = useState(true);

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

  return (
    <>
      <CacheProvider value={cache}>
        <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
          <Button
            endIcon={<ArrowBack />}
            href={`/main-content/learning-modules/${moduleDirector}`}
          >
            Back
          </Button>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-start", width: "100%" }}>
          <Button
            sx={{
            }}
            onClick={() => setBuilderMode(!builderMode)}
          >
            Toggle Build Mode
          </Button>
        </Box>
        <Box sx={{ width: "100%" }}>
          {builderMode ? (
            <LearningModuleLearn moduleDatum={moduleDatum} />
          ) : (
            <ModuleBuilder moduleDatum={moduleDatum} />
          )}
        </Box>
      </CacheProvider>
    </>
  );
}

export default LearningModuleHome;
