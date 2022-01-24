import Stackedit from "stackedit-js";

const el = document.querySelector("textarea");
const stackedit = new Stackedit();

// Open the iframe
stackedit.openFile({
  name: "Userguide", // with an optional filename
  content: {
    text: el.value, // and the Markdown content.
  },
});

// Listen to StackEdit events and apply the changes to the textarea.
stackedit.on("fileChange", (file) => {
  el.value = file.content.text;
});

window.stackedit = stackedit;

export default Guide;
