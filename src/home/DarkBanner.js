import React from "react";
import { NavLink } from "react-router-dom";
import { CacheProvider } from "@emotion/react";
import { styled } from "@mui/system";
/* I added this package to handle auto-scrolling down the page.  Here's a link to api: https://www.npmjs.com/package/react-scroll */
import { Link } from "react-scroll";
import createCache from "@emotion/cache";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import downArrow from "../images/downArrow.png";
import classes from "./DarkBanner.module.css";
import laptopImage from "../images/darkenedLaptop.png";

//override default mui styling
const cache = createCache({
  key: "css",
  prepend: true,
});

const BannerTitle = styled("h1")(({ theme }) => ({
    color: "#ffffff",
    fontWeight: "600",
    fontFamily:"inter",
    fontSize:"95px",
  [theme.breakpoints.down("md")]: {
    color: "#ffffff",
    fontFamily:"inter",
    fontWeight: "600",
    fontSize:"48px",
  },
}));
function DarkBanner() {
  return (
    <>
      <CacheProvider value={cache}>
        <Box className={classes.sloganContainer}>
          <Box className={classes.leftSloganContainer}>
            <Box className={classes.cakeContainer}>
              <BannerTitle
              >
                With us, coding is a piece of cake!
              </BannerTitle>
              <Typography sx={{ color: "neutral.main" }} variant="h6">
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
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div className={classes.hiddenDiv} />
                <Container className={classes.arrowContainer}>
                  {/* Here is the react-scroll component logic */}
                  <Link
                    to="target-create"
                    duration={800}
                    smooth={true}
                    offset={-60}
                    className={classes.innerArrowContainer}
                  >
                    <img
                      src={downArrow}
                      alt="null"
                      className={classes.downArrow}
                    />

                    <img
                      src={downArrow}
                      alt="null"
                      className={classes.downArrow}
                    />
                  </Link>
                </Container>
              </Container>
            </Box>
          </Box>
          <Box className={classes.laptopImageContainer}>
            <img src={laptopImage} alt="null"  />
          </Box>
        </Box>
      </CacheProvider>
    </>
  );
}

export default DarkBanner;
