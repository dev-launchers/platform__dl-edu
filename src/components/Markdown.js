import Stackedit from "stackedit-js"
import ReactMarkdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import { useState } from "react"

import Fab from "@material-ui/core/Fab"
import EditIcon from "@material-ui/icons/Edit"

import "highlight.js/styles/base16/zenburn.css"

function Markdown(props) {
    const [markdown, setMarkdown] = useState(props.markdown);
    
    const openStackedit = () => {
        const stackedit = new Stackedit()
        stackedit.openFile({
            name: "filename",
            content: {
                text: markdown
            }
        })

        stackedit.on("fileChange", (file) => {
            setMarkdown(file.content.text)
        })

        stackedit.on("close", () => {
            // TODO when user closes modal, post to backend to save changes
        })
    }

    return (
        <div>
            {props.canEdit &&
                <Fab color="primary" style={{float: "right", right: "10px"}} onClick={openStackedit}>
                    <EditIcon/>
                </Fab>
            }
            <div>
                <ReactMarkdown 
                    children={markdown}
                    rehypePlugins={[[rehypeHighlight, { ignoreMissing: true }]]}>
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default Markdown