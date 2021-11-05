import React from "react";
import { CacheProvider } from "@emotion/react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import classes from "./DarkBanner.module.css";
import backGroundImage from "../images/darkenedBackGroundImage.png";

function DarkBanner() {
  
  //override default mui styling
  const cache = createCache({
    key: "css",
    prepend: true,
  });

  return (
    <>
    <CacheProvider value={cache}>
      <Box className={classes.sloganContainer}>
        <div className={classes.bannerTextContainer}>
            <Typography className={classes.bannerText} variant="h2">
              With us coding is a piece of cake!
            </Typography>
          <Button className={classes.joinUsButton}>Join us</Button>
        </div>
        <img className={classes.image} src={backGroundImage} alt="null"></img>
      </Box>
      </CacheProvider>
    </>
  );
}

export default DarkBanner;
