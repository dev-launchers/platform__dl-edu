import React from "react";
import { NavLink } from "react-router-dom";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import downArrow from "../images/downArrow.png";
import classes from "./DarkBanner.module.css";
import laptopImage from "../images/croppedLaptop.png";

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
          <Box sx={{ display: "flex", flexDirection: "column", width:"50%" }}>
            <Container sx={{ border:"1px solid white" }}>
            <Typography
              sx={{ color: "neutral.main" }}
              variant="h2"
              color="neutral"
            >
              With us coding is a piece of cake!
            </Typography>
            <Typography
              sx={{ color: "neutral.main" }}
              paragraph
              color="neutral"
            >
              We’re a nonprofit coding platform aimed at bridging opportunity
              gaps in the technology industry.
            </Typography>
            <Button
              component={NavLink}
              to={"/main-content/legacy-learn/code"}
              color="secondary"
              variant="contained"
              size="medium"
              className={classes.joinUsButton}
            >
              Join us
            </Button>
            </Container>
          </Box>
          <div>
            <img src={downArrow} alt="null" className={classes.downArrow} />
            <img src={downArrow} alt="null" className={classes.downArrow} />
          </div>
          <Container sx={{ width:"30%" }}>
            <img src={laptopImage} alt="null" className={classes.laptopImage}/>
          </Container>
        </Box>
      </CacheProvider>
    </>
  );
}

export default DarkBanner;
