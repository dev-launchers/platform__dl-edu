import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import ArrowRight from "../images/arrow-right.png";
import SquareDesign1 from "../components/SquareDesign1";
import SquareDesign2 from "../components/SquareDesign2";
import SquareDesign3 from "../components/SquareDesign3";

function Create() {
  function testFunction() {
    console.log("object")
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#181818",
        height:"350px",
        paddingBottom:"100px"
      }}
    >
      <Container
        component={Typography}
        variant={"h2"}
        sx={{ textAlign: "center", color: "#ffffff", fontWeight: "800", mb:"50px" }}
      >
        Create
      </Container>
      <Grid
        container
        width="100%"
        alignItems="center"
        justifyContent="space-evenly"
      >
        <Grid
          item
          component={Container}
          display="flex"
          flexDirection="column"
          width="33%"
        >
          <Box
            sx={{
              height: "35px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
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
            <Typography paragraph sx={{ color: "#81C3D7", cursor:"pointer" }} onClick={testFunction}>
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
            <Typography paragraph sx={{ color: "#81C3D7", cursor:"pointer"}} onClick={testFunction}>
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
            <Typography paragraph sx={{ color: "#81C3D7", cursor:"pointer" }} onClick={testFunction}>
              Try it <img src={ArrowRight} alt="null" />
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Create;
