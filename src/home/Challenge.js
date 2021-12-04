import React from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import classes from "./Challenge.module.css";
import Great from "../images/do-what-is-great.png";
import MockCard from "../images/mock-card.png";
import ArrowRight from "../images/arrow-right.png";

const cache = createCache({
  key: "css",
  prepend: true,
});

function Challenge() {
  function handleGetStarted() {
    console.log("object");
  }

  return (
    <CacheProvider value={cache}>
      <Box sx={{ backgroundColor: "#181818", height: "570px" }}>
        <Container
          component={Typography}
          variant={"h2"}
          sx={{ color: "#ffffff", textAlign: "center", fontWeight: "800" }}
        >
          Challenge Yourself
        </Container>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height:"400px",
          }}
        >
          <Container className={classes.designContainer}>
            <div className={classes.circle} />
            <img src={Great} alt="null" className={classes.great} />
            <img src={MockCard} alt="null" className={classes.mock} />
          </Container>
          <Container
            sx={{ width: "50%", display: "flex", flexDirection: "column", justifyContent:"center" }}
          >
            <Typography variant="h5" color="#ffffff">
              Gain problem solving skills with our code challenges!
            </Typography>
            <Typography paragraph color="#ffffff">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst
              risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in
              suscipit non. Non commodo volutpat, pharetra, vel.
            </Typography>
            <Typography color="#81C3D7" paragraph sx={{cursor:"pointer"}} onClick={handleGetStarted}>
              Get started{" "}
              <img src={ArrowRight} alt="null" className={classes.arrowRight} />
            </Typography>
          </Container>
        </Box>
      </Box>
    </CacheProvider>
  );
}

export default Challenge;
