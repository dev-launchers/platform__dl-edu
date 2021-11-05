import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
//import
import classes from "./DarkBanner.module.css";
import backGroundImage from "../images/backgroundCodeImage.png";

const styles = {
  paperContainer: {
    backGroundImage: `url(${backGroundImage})`,
  },
};
function DarkBanner() {

  return (
    <>
      <Box className={classes.sloganContainer}>
        <img className={classes.image} src={backGroundImage} alt="null" />
      </Box>
    </>
  );
}

export default DarkBanner;
