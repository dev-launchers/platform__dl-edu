import React from "react";
import { CssBaseline } from "@mui/material";
import ModuleMetadata from "../data/ModuleMetadata";
import MyModulesListItem from "../modules/MyModulesListItem";

function UserModuleList({ ownerId }) {
  // TODO - after figuring out how to get authenticated user data,
  // display only modules owned by the user

  const learningModuleListItemComponents = ModuleMetadata
    .filter((metaDatum) => metaDatum.ownerId && metaDatum.ownerId === ownerId)
    .map((metaDatum) => (
      <MyModulesListItem key={metaDatum.id} moduleMetadata={metaDatum} />
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
