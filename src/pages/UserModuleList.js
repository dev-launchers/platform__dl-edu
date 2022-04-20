import React from "react";
import { CssBaseline } from "@mui/material";
import ModuleMetadata from "../data/ModuleMetadata";
import LearningModuleListItem from "../modules/LearningModuleListItem";

function UserModuleList(props) {
  // TODO - after figuring out how to get authenticated user data,
  // display only modules owned by the user

  const learningModuleListItemComponents = ModuleMetadata.map((metaDatum) => (
    <LearningModuleListItem key={metaDatum.id} moduleMetadata={metaDatum} />
  ));

  return (
    <>
      <CssBaseline />
      <div className="module-list-container">
        {learningModuleListItemComponents}
      </div>
    </>
  );
}

export default UserModuleList;
