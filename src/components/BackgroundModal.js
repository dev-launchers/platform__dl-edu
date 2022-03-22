import React from "react";

function BackgroundModal(props) {

  return (
    <div
      style={{
        backgroundColor: "rgb(0, 0, 0, .5)",
        height: "190vh",
        width: "100%",
        position:"fixed",
        zIndex:"3000",
      }}
      onClick={props.closeModal}
    />
  );
}

export default BackgroundModal;
