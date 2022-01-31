import React from "react";
import Stackedit from "stackedit-js";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";

function Guide() {
  const [markdown, setMarkdown] = React.useState("");

  const openStackedit = () => {
    const stackedit = new Stackedit();
    stackedit.openFile({
      name: "user-guide",
      content: {
        text: markdown,
      },
    });

    stackedit.on("fileChange", (file) => {
      setMarkdown(file.content.text);
    });

    stackedit.on("close", () => {
      // TODO when user closes modal, post to backend to save changes
    });
  };

  return (
    <div>
      <Fab
        color="primary"
        style={{ float: "right", right: "10px" }}
        onClick={openStackedit}
      >
        <EditIcon />
      </Fab>
    </div>
  );
}

export default Guide;
