import React from "react";

function BackgroundModal(props) {
  return (
    <div
      style={{
        backgroundColor: "rgb(0, 0, 0, .5)",
        height: "100vh",
        width: "100%",
        position:"absolute",
        zIndex:"3000"
      }}
      onClick={props.closeModal}
    />
  );
}

export default BackgroundModal;
