import React from "react";
import ReactMarkdown from "react-markdown";

import "./LearningModule.css";

function LearningModule(props) {
    return (

        <div>
            <div class="card lm-module">
                <div class="learning-module-header">
                    <h2>{props.moduleDatum.title}</h2>
                    <button onClick={props.onClickBackBtn}>Back</button>
                </div>
                <div class="lm-leftcolumn">
                    <ReactMarkdown children={props.moduleDatum.markdown}></ReactMarkdown>
                </div>
                <div class="lm-rightcolumn">
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