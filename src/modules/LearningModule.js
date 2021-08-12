import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "./LearningModule.css";
import 'highlight.js/styles/base16/zenburn.css'

function LearningModule(props) {
    return (
        <div>
            <div className="card lm-module">
                <div className="learning-module-header">
                    <h2>{props.moduleDatum.title}</h2>
                    <button onClick={props.onClickBackBtn}>Back</button>
                </div>
                <div className="lm-leftcolumn">
                    <ReactMarkdown
                        children={props.moduleDatum.markdown}
                        rehypePlugins={[rehypeHighlight]}>
                    </ReactMarkdown>
                </div>
                <div className="lm-rightcolumn">
                    <iframe src={props.moduleDatum.codeSandboxSrc}
                        style={{ width: "100%", height: "100%" }}
                        title="red-https-knd21"
                        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default LearningModule