import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

import classes from "./Create.module.css";
import ArrowRight from "../images/arrow-right.png";
import SquareDesign1 from "../components/SquareDesign1";
import SquareDesign2 from "../components/SquareDesign2";
import SquareDesign3 from "../components/SquareDesign3";

//override default mui styling
const cache = createCache({
  key: "css",
  prepend: true,
});

const ResponsiveBox = styled("Box")(({ theme }) => ({
  width: "100%",
  display:"flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  [theme.breakpoints.down('md')]: {
    display:"flex",
     flexDirection:"column",
     alignItems: "center",
     justifyContent: "space-evenly", 
  }
}));

function Create() {
  function testFunction() {
    console.log("object");
  }

  return (
    <CacheProvider value={cache}>
      <ResponsiveBox
        className="target-create"
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#181818",
          paddingBottom: "100px",
          alignItems: "center",
        }}
      >
        <Container
          component={Typography}
          variant={"h2"}
          className={classes.create}
        >
          Create
        </Container>
        <Grid
          container
        >
          <Grid
            item
            component={Container}
            display="flex"
            flexDirection="column"
            width="33%"
          >
            <Box className={classes.descriptionsContainer}>
              <SquareDesign1 />
              <SquareDesign1 />
            </Box>
            <Typography variant="h5" sx={{ color: "#ffffff" }}>
              Concept Modules
            </Typography>
            <Typography paragraph sx={{ color: "#ffffff" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
              scelerisque at quam congue posuere libero in sit quam.
            </Typography>
            <Box display="flex">
              <Typography
                paragraph
                sx={{ color: "#81C3D7", cursor: "pointer" }}
                onClick={testFunction}
              >
                Try it <img src={ArrowRight} alt="null" />
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            component={Container}
            display="flex"
            flexDirection="column"
            width="33%"
          >
            <SquareDesign2 />
            <Typography variant="h5" sx={{ color: "#ffffff" }}>
              Program Modules
            </Typography>
            <Typography paragraph sx={{ color: "#ffffff" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
              scelerisque at quam congue posuere libero in sit quam.
            </Typography>
            <Box display="flex">
              <Typography
                paragraph
                sx={{ color: "#81C3D7", cursor: "pointer" }}
                onClick={testFunction}
              >
                Try it <img src={ArrowRight} alt="null" />
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            component={Container}
            display="flex"
            flexDirection="column"
            width="33%"
          >
            <SquareDesign3 />
            <Typography variant="h5" sx={{ color: "#ffffff" }}>
              Code Challenge Modules
            </Typography>
            <Typography paragraph sx={{ color: "#ffffff" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
              scelerisque at quam congue posuere libero in sit quam.
            </Typography>
            <Box display="flex">
              <Typography
                paragraph
                sx={{ color: "#81C3D7", cursor: "pointer" }}
                onClick={testFunction}
              >
                Try it <img src={ArrowRight} alt="null" />
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </ResponsiveBox>
    </CacheProvider>
  );
}

export default Create;
