import React from "react";
import { NavLink } from "react-router-dom";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import downArrow from "../images/downArrow.png";
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
          <Grid
            container
            spacing={8}
            direction="column"
            justifyContent="center"
            alignItems="center"
            className={classes.bannerTextContainer}
          >
            <Grid item>
              <Typography sx={{ color: 'neutral.main' }} variant="h2" color="neutral">
                With us coding is a piece of cake!
              </Typography>
            </Grid>
            <Grid item>
              <NavLink to="/main-content/explore"><Button
                color="secondary"
                variant="contained"
                size="medium"
                className={classes.joinUsButton}
              >
                Join us
              </Button></NavLink>
            </Grid>
            <Grid item sx={{ display:'flex', flexDirection:"column"}}>
              <img src={downArrow} alt="null" className={classes.downArrow} />
              <img src={downArrow} alt="null" className={classes.downArrow} />
            </Grid>
          </Grid>
          <img className={classes.image} src={backGroundImage} alt="null"></img>
        </Box>
      </CacheProvider>
    </>
  );
}

export default DarkBanner;
