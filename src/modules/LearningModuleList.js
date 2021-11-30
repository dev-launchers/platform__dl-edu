import React, { useEffect } from "react"
import ModuleMetadata from "../data/ModuleMetadata"
import LearningModuleListItem from "./LearningModuleListItem"
import { useParams } from "react-router-dom"

import "./LearningModuleList.css"

function LearningModuleList() {
    const params = useParams();

    const learningModuleListItemComponents = ModuleMetadata
        .filter(metaDatum => metaDatum.category?.toLowerCase() == params.category?.toLowerCase())
        .map(metaDatum =>
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

export default LearningModuleList;