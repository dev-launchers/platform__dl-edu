import React from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import classes from "./Challenge.module.css";
import Great from "../images/do-what-is-great.png";
import ArrowRight from "../images/arrow-right.png";

const cache = createCache({
  key: "css",
  prepend: true,
});

function Challenge() {
  function handleGetStarted() {
  }

  return (
    <CacheProvider value={cache}>
      <Box className={classes.challengeContainer}>
        <Container
          component={Typography}
          variant={"h2"}
          className={classes.titleContainer}
        >
          Challenge Yourself
        </Container>
        <Box className={classes.outerDesignContainer}>
          <Box className={classes.innerDesignContainer}>
            <img src={Great} alt="null" className={classes.great} />
          </Box>
          <Box className={classes.outerDescriptionContainer}>
            <Typography variant="h5" color="#ffffff">
              Gain problem solving skills with our code challenges!
            </Typography>
            <Typography paragraph color="#ffffff">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst
              risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
              suscipit non. Non commodo volutpat, pharetra, vel.
            </Typography>
            <Typography
              color="#81C3D7"
              paragraph
              sx={{ cursor: "pointer" }}
              onClick={handleGetStarted}
            >
              Get started
              <img src={ArrowRight} alt="null" className={classes.arrowRight} />
            </Typography>
          </Box>
        </Box>
      </Box>
    </CacheProvider>
  );
}

export default Challenge;
