import React from "react"
import "./LearningModuleListItem.css"

class LearningModuleListItem extends React.Component {
	constructor() {
		super()

		this.onItemClick = this.onItemClick.bind(this)
	}

	onItemClick() {
		this.props.onClickLearningModuleItemListHandler(this.props.moduleMetadata.id)
	}

	render() {
		const keyWordComponents = this.props.moduleMetadata.keyWords.map((keyword) => <div className="keyword-chip">{keyword}</div>)
		return (
			<div className="module-list-item" onClick={this.onItemClick}>
				<h2 style={{ alignSelf: "center" }}>{this.props.moduleMetadata.title}</h2>
				<img src={this.props.moduleMetadata.thumbnail} style={{ height: "100px", width: "100px", borderRadius: "50px", alignSelf: "center" }} />
				<h5>{this.props.moduleMetadata.description}</h5>
				<div className="keyword-container">
					<div>Keywords:</div>
					{keyWordComponents}
				</div>
			</div>
		)
	}
}

export default LearningModuleListItem