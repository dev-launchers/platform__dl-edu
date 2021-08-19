import React from "react"
import "./LearningModuleListItem.css"

function LearningModuleListItem(props) {
    const onItemClick = () => {
        props.onClickLearningModuleItemListHandler(props.moduleMetadata.id)
    }

    const keyWordComponents = props.moduleMetadata.keyWords.map((keyword, index) =>
        <div className="keyword-chip" key={index}>{keyword}</div>
    )

    return (
        <div className="module-list-item" onClick={onItemClick}>
            <h2 style={{ alignSelf: "center" }}>{props.moduleMetadata.title}</h2>
            <img src={props.moduleMetadata.thumbnail} className="module-img" />
            <h5>{props.moduleMetadata.description}</h5>
            <div className="keyword-container">
                <div>Keywords:</div>
                {keyWordComponents}
            </div>
        </div>
    )

}

export default LearningModuleListItem