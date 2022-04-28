import React from "react";
import { CssBaseline } from "@mui/material";
import ModuleMetadata from "../../data/ModuleMetadata";
import MyModulesListItem from "../../modules/MyModulesListItem";

function UserModuleList({ ownerId }) {

  const userModuleListItemComponents = ModuleMetadata
    .filter((metaDatum) => metaDatum.ownerId && metaDatum.ownerId === ownerId)
    .map((metaDatum) => (
      <MyModulesListItem key={metaDatum.id} moduleMetadata={metaDatum} />
    ));

  return (
    <>
      <CssBaseline />
      <div className="module-list-container">
        {userModuleListItemComponents}
      </div>
    </>
  );
}

export default UserModuleList;
