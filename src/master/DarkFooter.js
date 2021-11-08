import React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import classes from "./DarkFooter.module.css";
//override default mui styling
const cache = createCache({
  key: "css",
  prepend: true,
});
function DarkFooter() {
  return (
    <CacheProvider value={cache}>
      <Grid
        container
        columns={5}
        spacing={2}
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.footerContainer}
      >
        <Grid item xs={12}>
          <Typography variant="h2" sx={{ color: "#ffffff" }}>
            Sign up for our newsletter!
          </Typography>
        </Grid>
        <Grid item className={classes.emailQueryContainer}>
          <TextField size='small' placeholder="Enter your email" className={classes.emailQueryField}/>
          <Button className={classes.emailQueryButton}>Submit</Button>{" "}
        </Grid>
        <Grid item>
          <img />
          <img />
          <img />
          <img />
          <img />
        </Grid>
        <Grid item>
          <Typography variant="h5" sx={{ color: "#ffffff", margin:'auto',width:'80%', textAlign:'center' }}>
            “Tell me and I forget, teach me and I may remember, involve me and I
            learn” - Benjamin Franklin
          </Typography>
        </Grid><Grid item xs />
        <Grid item><Typography paragraph={true} sx={{ color: "#ffffff" }}> ©Dev Launchers, 2021</Typography></Grid>
      </Grid>
    </CacheProvider>
  );
}

export default DarkFooter;
