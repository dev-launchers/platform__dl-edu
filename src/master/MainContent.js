import React, { useState } from "react";
import LearningModule from "../modules/LearningModule";
import LearningModuleList from "../modules/LearningModuleList";
import ModuleData from "../data/ModuleData"

import "./MainContent.css";

//Website Layout Basics CSS - https://www.w3schools.com/css/css_website_layout.asp
//Website Layout Example, used below - https://www.w3schools.com/css/tryit.asp?filename=trycss_website_layout_blog
function MainContent(props) {
    const [showList, setShowList] = useState(true)
    const [loadedModuleData, setLoadedModuleData] = useState(null)

    const onClickLearningModuleItemMainHandler = (id) => {
        // Mock fetching data from API
        const moduleDatum = ModuleData.find(data => data.id === id)

        setShowList(false)
        setLoadedModuleData(moduleDatum)
    }

    const onClickBackBtn = () => {
        setShowList(true)
    }

    if (showList) {
        return <LearningModuleList onClickLearningModuleItemMainHandler={onClickLearningModuleItemMainHandler}/>
    } else {
        return <LearningModule moduleDatum={loadedModuleData} onClickBackBtn={onClickBackBtn}/>   
    }
    
}

export default MainContent;
