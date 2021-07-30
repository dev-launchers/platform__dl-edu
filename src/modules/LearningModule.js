import React from "react";
import ReactMarkdown from "react-markdown";

import "./LearningModule.css";

const markdown = `
# Hello, *world*! (H1)

## Header 2

### Header 3

## Overview

* Follows [CommonMark](https://commonmark.org)
* Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Has a lot of plugins
`

function LearningModule() {
    return (
        
        <div>
            <div class="card lm-module">
                <div class="lm-leftcolumn">
                    Writeup/Guide Section
                    <ReactMarkdown children={markdown}></ReactMarkdown>
                </div>
                <div class="lm-rightcolumn">
                    <iframe src="https://codesandbox.io/embed/red-https-knd21?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark&view=editor"
                        style={{width:"100%", height:"100%"}}
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