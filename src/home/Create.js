import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import SquareDesign1 from "../components/SquareDesign1";
import SquareDesign2 from "../components/SquareDesign2";

function Create() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#181818",
      }}
    >
      <Container
        component={Typography}
        variant={"h2"}
        sx={{ textAlign: "center", color: "#ffffff", fontWeight: "800" }}
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
          direction="column"
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
        </Grid>
        <Grid
          item
          component={Container}
          display="flex"
          direction="column"
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
        </Grid>
        <Grid item>
          <Typography variant="h5" sx={{ color: "#ffffff" }}>
            Code Challenge Modules
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Create;
