import React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

//override default mui styling
const cache = createCache({
  key: "css",
  prepend: true,
});
function DarkFooter() {
  return (
    <CacheProvider value={cache}>
      <Box sx={{backgroundColor:'#222222'}}>
        <Container>
          <Grid>
            <Typography variant="h2">Sign up for our newsletter!</Typography>
          </Grid>
        </Container>
      </Box>
    </CacheProvider>
  );
}

export default DarkFooter;
