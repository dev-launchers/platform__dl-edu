import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import EmbeddedIDE from "../components/EmbeddedIDE/EmbeddedIDE";
import "./LearningModule.css";

import { Link, useParams } from "react-router-dom"
import { Button } from "@material-ui/core"
import { ArrowBack } from "@material-ui/icons"

import 'highlight.js/styles/base16/zenburn.css'
import "./LearningModule.css"
import ModuleData from "../data/ModuleData"

function LearningModule() {
    const params = useParams();

    // TODO replace by API call once we have a back-end
    const moduleDatum = ModuleData.find(data => data.id == params.moduleId)

    return (
        <div>
            <div className="lm-module">
                <div className="learning-module-header">
                    <h2>{moduleDatum.title}</h2>
                    <Link to="/learning-modules/javascript">
                        <Button>
                            <ArrowBack/> Back
                        </Button>
                    </Link>
                </div>
                <div style={{ display: "flex", height: '800px'}}>
                    <div className="lm-leftcolumn">
                        <ReactMarkdown
                            children={moduleDatum.markdown}
                            rehypePlugins={[rehypeHighlight]}>
                        </ReactMarkdown>
                    </div>
                    <div className="lm-rightcolumn">
                        <EmbeddedIDE embedURL={moduleDatum.embeddedIDEURL} customIFrameStyle={moduleDatum.embedIDEStyle}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearningModule