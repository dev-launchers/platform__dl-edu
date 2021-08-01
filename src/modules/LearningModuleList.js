import React from "react"
import ModuleMetadata from "../data/ModuleMetadata"
import LearningModuleListItem from "./LearningModuleListItem"
import "./LearningModuleList.css"

class LearningModuleList extends React.Component {
    constructor() {
        super()
        this.state = {}
        this.onClickLearningModuleItemListHandler = this.onClickLearningModuleItemListHandler.bind(this)
    }

    onClickLearningModuleItemListHandler(id) {
        this.props.onClickLearningModuleItemMainHandler(id);
    }

    render() {
        const learningModuleListItemComponents = ModuleMetadata.map(meta => {
            return (
                <LearningModuleListItem
                    key={meta.id}
                    moduleMetadata={meta}
                    onClickLearningModuleItemListHandler={this.onClickLearningModuleItemListHandler}
                />
            )
        })

        return (
            <div className="module-list-container">
                {learningModuleListItemComponents}
            </div>
        )
    }
}

export default LearningModuleList