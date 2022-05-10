import React from "react";
import { CssBaseline } from "@mui/material";
import ModuleMetadata from "../data/ModuleMetadata";
import LearningModuleListItem from "./LearningModuleListItem";

function FilteredLearningModule(props) {
  let learningModuleListItemComponents;

  if (
      props.filterKey === "beginner" ||
      props.filterKey === "intermediate" ||
      props.filterKey === "advanced"
    ) {
      learningModuleListItemComponents = ModuleMetadata.filter(
        (metaDatum) => metaDatum.difficulty === props.filterKey
      ).map((metaDatum) => (
        <LearningModuleListItem key={metaDatum.id} moduleMetadata={metaDatum} />
      ));
    } else {
      learningModuleListItemComponents = ModuleMetadata.filter((module) => {
        return module.keyWords.some((keyWord) => keyWord === props.filterKey);
      }).map((module) => (
        <LearningModuleListItem key={module.id} moduleMetadata={module} />
      ));
    }

  return (
    <>
      <CssBaseline />
      {learningModuleListItemComponents}
    </>
  );
}

export default FilteredLearningModule;
