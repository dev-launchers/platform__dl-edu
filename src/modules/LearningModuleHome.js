import React, { useState } from "react";

import LearningModuleLearn from "./LearningModuleLearn";
import LearningModuleBuild from "./LearningModuleBuild";

function LearningModuleHome(props) {
  //dynamically route user back to module starting point
  const [builderMode, setBuilderMode] = useState(true);

  return <>{builderMode ? <LearningModuleBuild /> : <LearningModuleLearn />}</>;
}

export default LearningModuleHome;
