import React from "react";

function BackgroundModal(props) {

  return (
    <div
      style={{
        backgroundColor: "#000000",
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
