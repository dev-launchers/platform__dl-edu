import React from "react";

import classes from "./SquareDesign3.module.css";

function SquareDesign3() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.orangeSquare} />
      <div className={classes.innerWrapper}>
        <div className={classes.lightBlueSquare} />
        <div className={classes.blueSquare1} />
      </div>
    </div>
  );
}

export default SquareDesign3;
