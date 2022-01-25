import React from "react";
import Stackedit from "stackedit-js";

function Guide() {
    console.log(document.getElementById("my-textarea"))
    const el = document.getElementById("my-textarea");
    const stackedit = new Stackedit();

  // Open the iframe
    stackedit.openFile({
      name: "Userguide", // with an optional filename
      content: {
        text: el.value, // and the Markdown content.
      },
    });

  stackedit.on('fileChange', (file) => {
    el.value = file.content.text;
  });

  return (
    <div>
      {/* <textarea id="my-textarea" value={el.value}></textarea> */}
    </div>
  );
}

export default Guide;
