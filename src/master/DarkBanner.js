import React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import downArrow from '../images/downArrow.png';
import classes from "./DarkBanner.module.css";
import backGroundImage from "../images/darkenedBackGroundImage.png";

  //override default mui styling
  const cache = createCache({
    key: "css",
    prepend: true,
  });
function DarkBanner() {

  return (
    <>
    <CacheProvider value={cache}>
      <Box className={classes.sloganContainer}>
        <div className={classes.bannerTextContainer}>
            <Typography className={classes.bannerText} variant="h2">
              With us coding is a piece of cake!
            </Typography>
          <Button variant='contained' size='medium' className={classes.joinUsButton}>Join us</Button>
          <div className={classes.arrowContainer}><img src={downArrow} alt='null' className={classes.downArrow}/>
          <img src={downArrow} alt='null' className={classes.downArrow}/></div>
        </div>
        <img className={classes.image} src={backGroundImage} alt="null"></img>
      </Box>
      </CacheProvider>
    </>
  );
}

export default DarkBanner;
