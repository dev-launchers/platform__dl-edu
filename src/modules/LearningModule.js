import React from "react"
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
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
                        <iframe src={moduleDatum.codeSandboxSrc}
                            style={{ width: "100%", height: "100%" }}
                            title="red-https-knd21"
                            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearningModule