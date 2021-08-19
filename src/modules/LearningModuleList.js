import React from "react"
import ModuleMetadata from "../data/ModuleMetadata"
import LearningModuleListItem from "./LearningModuleListItem"
import "./LearningModuleList.css"

function LearningModuleList(props) {
    const onClickLearningModuleItemListHandler = (id) => {
        props.onClickLearningModuleItemMainHandler(id);
    }

    const learningModuleListItemComponents = ModuleMetadata.map(metaDatum =>
        <LearningModuleListItem
            key={metaDatum.id}
            moduleMetadata={metaDatum}
            onClickLearningModuleItemListHandler={onClickLearningModuleItemListHandler}
        />
    )

    return (
        <div className="module-list-container">
            {learningModuleListItemComponents}
        </div>
    )

}

export default LearningModuleList