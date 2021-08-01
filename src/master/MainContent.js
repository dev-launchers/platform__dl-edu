import React from "react";

import "./MainContent.css";
import LearningModule from "../modules/LearningModule";
import LearningModuleList from "../modules/LearningModuleList";
import ModuleData from "../data/ModuleData"

//Website Layout Basics CSS - https://www.w3schools.com/css/css_website_layout.asp
//Website Layout Example, used below - https://www.w3schools.com/css/tryit.asp?filename=trycss_website_layout_blog
class MainContent extends React.Component {
    constructor() {
        super()
        this.state = {
            showList: true,
            loadedModuleData: null
        }

        this.onClickLearningModuleItemMainHandler = this.onClickLearningModuleItemMainHandler.bind(this)
        this.onClickBackBtn = this.onClickBackBtn.bind(this)
    }

    onClickLearningModuleItemMainHandler(id) {
        // Mock fetching data from API
        const moduleDatum = ModuleData.find(data => data.id === id)

        this.setState(() => {
            return {
                showList: false,
                loadedModuleData: moduleDatum
            }
        })
    }

    onClickBackBtn() {
        this.setState(() => { 
            return {
                showList: true 
            }
        })
    }

    conditionalRender() {
        if (this.state.showList) {
            return <LearningModuleList onClickLearningModuleItemMainHandler={this.onClickLearningModuleItemMainHandler}/>
        } else {
            return <LearningModule moduleDatum={this.state.loadedModuleData} onClickBackBtn={this.onClickBackBtn}/>   
        }
    }

	render() {
		return (
			this.conditionalRender()
		)
	}
}

export default MainContent;
