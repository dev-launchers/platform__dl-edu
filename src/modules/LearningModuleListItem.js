import React from "react"
import { Link } from "react-router-dom"

import "./LearningModuleListItem.css"

function LearningModuleListItem(props) {
    const keyWordComponents = props.moduleMetadata.keyWords.map((keyword, index) =>
        <div className="keyword-chip" key={index}>{keyword}</div>
    )

    return (
        <Link to={"/main-content/learning-module/" + props.moduleMetadata.id}>        
            <div className="module-list-item">
                <h2 style={{ alignSelf: "center" }}>{props.moduleMetadata.title}</h2>
                <img src={props.moduleMetadata.thumbnail} className="module-img" />
                <h5>{props.moduleMetadata.description}</h5>
                <div className="keyword-container">
                    <div>Keywords:</div>
                    {keyWordComponents}
                </div>
            </div>
        </Link>
    )
}

export default LearningModuleListItem