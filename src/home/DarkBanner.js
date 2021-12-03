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
import laptopImage from "../images/darkenedLaptop.png";

//override default mui styling
const cache = createCache({
  key: "css",
  prepend: true,
});
function DarkBanner() {
  function handleArrowsClicked() {
    console.log("foo");
  }

  return (
    <>
      <CacheProvider value={cache}>
        <Box className={classes.sloganContainer}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
              margin: "5px",
            }}
          >
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignContent: "flex-end",
                height: "550px",
                width: "90%",
              }}
            >
              <Typography
                sx={{ color: "neutral.main", fontWeight: "600" }}
                variant="h1"
                color="neutral"
              >
                With us, coding is a piece of cake!
              </Typography>
              <Typography
                sx={{ color: "neutral.main" }}
                variant="h6"
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
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
                onClick={handleArrowsClicked}
              >
                <div
                  style={{ display: "hidden", width: "772px", height: "50px" }}
                />
                <Container className={classes.arrowContainer}>
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
                </Container>
              </Container>
            </Container>
          </Box>
          <Container sx={{ width: "30%" }}>
            <img src={laptopImage} alt="null" className={classes.laptopImage} />
          </Container>
        </Box>
      </CacheProvider>
    </>
  );
}

export default DarkBanner;
