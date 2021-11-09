import React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import instagramIcon from '../images/instagram.png';
import devLaunchersIcon from '../images/dev_launchers_rocket_small.png';
import linkedinIcon from '../images/linkedin.png';
import twitchIcon from '../images/twitch.png';
import discordIcon from '../images/discord.png';
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
        spacing={4}
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
          <TextField
            size="small"
            placeholder="Enter your email"
            className={classes.emailQueryField}
          />
          <Button className={classes.emailQueryButton} variant='contained' color='secondary'>Submit</Button>{" "}
        </Grid>
        <Grid item sx={{ width:'58%', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <Link href='http://www.instagram.com'><img src={instagramIcon} className={classes.footerImage} /></Link>
          <Link href='http://www.linkedin.com'><img src={linkedinIcon} className={classes.footerImage} /></Link>
          <Link href='http://www.devlaunchers.com'><img src={devLaunchersIcon} className={classes.footerImage} /></Link>
          <Link href='http://www.twitch.com'><img src={twitchIcon} className={classes.footerImage} /></Link>
          <Link href='http://www.discord.com'><img src={discordIcon} className={classes.footerImage} /></Link>
        </Grid>
        <Grid item>
          <Typography variant="h5" className={classes.quoteText}>
            “Tell me and I forget, teach me and I may remember, involve me and I
            learn” - Benjamin Franklin
          </Typography>
        </Grid>
        <Grid item xs />
        <Grid item>
          <Typography paragraph={true} sx={{ color: "#ffffff" }}>
            {" "}
            ©Dev Launchers, 2021
          </Typography>
        </Grid>
      </Grid>
    </CacheProvider>
  );
}

export default DarkFooter;
