import React from "react";

import classes from "./SquareDesign1.module.css";

function SquareDesign1() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.orangeSquare} />
      <div className={classes.blueSquareWrapper}>
        <div className={classes.blueSquare1} />
        <div className={classes.blueSquare2} />
      </div>
    </div>
  );
}

export default SquareDesign1;
