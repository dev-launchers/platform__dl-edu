import React from "react";

import classes from "./SquareDesign2.module.css";

function SquareDesign2() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.lightBlueSquare} />
      <div className={classes.orangeSquare} />
      <div className={classes.blueSquare1} />
    </div>
  );
}

export default SquareDesign2;
