import React from "react"
import ModuleMetadata from "../data/ModuleMetadata"
import LearningModuleListItem from "./LearningModuleListItem"

import "./LearningModuleList.css"

function LearningModuleList() {
    const learningModuleListItemComponents = ModuleMetadata.map(metaDatum =>
        <LearningModuleListItem
            key={metaDatum.id}
            moduleMetadata={metaDatum}
        />
    )

    return (
        <div className="module-list-container">
            {learningModuleListItemComponents}
        </div>
    )
}

export default LearningModuleList