import React from "react";
import { CssBaseline } from "@mui/material";
import ModuleMetadata from "../data/ModuleMetadata";
import LearningModuleListItem from "./LearningModuleListItem";

function FilteredLearningModule(props) {
  const learningModuleListItemComponents = ModuleMetadata.filter(
    (metaDatum) => metaDatum.difficulty === props.filterKey
  ).map((metaDatum) => (
    <LearningModuleListItem key={metaDatum.id} moduleMetadata={metaDatum} />
  ));

  
  return (
    <>
      <CssBaseline />
      {learningModuleListItemComponents}
    </>
  );
}

export default FilteredLearningModule;
