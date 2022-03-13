import React from "react";
import Stackedit from "stackedit-js";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";

function Guide() {
  const [markdown, setMarkdown] = React.useState("");
  let tmpText;

  const openStackedit = () => {
    const stackedit = new Stackedit();
    stackedit.openFile({
      name: "user-guide",
      content: {
        text: markdown,
      },
    });

    stackedit.on("fileChange", (file) => {
      tmpText = file.content.text;
    });

    stackedit.on("close", () => {
      // TODO when user closes modal, post to backend to save changes
      setMarkdown("test");
    });
  };

  return (
    <>
      <div style={{ width:"100%", display:"flex", justifyContent:"space-around", backgroundColor:"#262626" }}>
        <Typography variant="h6" sx={{ color:"neutral.main"}}>Edit your guide here</Typography>
        <Fab
          color="primary"
          style={{ float: "right", right: "10px" }}
          onClick={openStackedit}
        >
          <EditIcon />
        </Fab>
      </div>
      <div>{markdown}</div>
    </>
  );
}

export default Guide;
