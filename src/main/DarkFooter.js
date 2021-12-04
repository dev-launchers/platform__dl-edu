import React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";

import instagramIcon from "../images/instagram.png";
import devLaunchersIcon from "../images/dev_launchers_rocket_small.png";
import linkedinIcon from "../images/linkedin.png";
import twitchIcon from "../images/twitch.png";
import discordIcon from "../images/discord.png";
import classes from "./DarkFooter.module.css";
//override default mui styling
const cache = createCache({
  key: "css",
  prepend: true,
});
function DarkFooter() {
  return (
    <CacheProvider value={cache}>
      <Box className={classes.footerContainer}>
        <Container sx={{ width: "20%" }} className={classes.leftContainer}>
          <Stack direction="column">
            <Box
              display="flex"
              width="65%"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <img src={devLaunchersIcon} className={classes.footerImage} />
              <Typography
                variant="h5"
                color="#ffffff"
                sx={{ fontFamily: "abel", fontWeight: "600" }}
              >
                DL Basecamp
              </Typography>
            </Box>
            <Typography color="#ffffff" paragraph>
              Copyright © 2021 DevLauchers.
            </Typography>
            <Typography color="#ffffff" paragraph>
              All rights reserved
            </Typography>
            <Box className={classes.imagesContainer}>
              <Card raised backgroundColor="#222222">
                <Link href="http://www.instagram.com">
                  <img src={instagramIcon} className={classes.footerImage} />
                </Link>
              </Card>
              <Card raised backgroundColor="#222222">
                <Link href="http://www.linkedin.com">
                  <img src={linkedinIcon} className={classes.footerImage} />
                </Link>
              </Card>
              <Card raised backgroundColor="#222222">
                <Link href="http://www.devlaunchers.com"></Link>
              </Card>
              <Card>
                <Link href="http://www.twitch.com">
                  <img src={twitchIcon} className={classes.footerImage} />
                </Link>
              </Card>
              <Card raised backgroundColor="#222222">
                <Link href="http://www.discord.com">
                  <img src={discordIcon} className={classes.footerImage} />
                </Link>
              </Card>
            </Box>
          </Stack>
        </Container>
        <Box className={classes.rightContainer}>
          <Stack direction="column" width="15%" spacing={3}>
            <Typography color="#ffffff" variant="h6">
              Company
            </Typography>
            <Link to="">
              <Typography color="#ffffff" paragraph>
                About us
              </Typography>
            </Link>
            <Link to="">
              <Typography color="#ffffff" paragraph>
                Contact us
              </Typography>
            </Link>
          </Stack>
          <Stack direction="column" width="15%">
            <Typography color="#ffffff" variant="h6">
              Support
            </Typography>
            <Link to="">
              <Typography color="#ffffff" paragraph>
                Terms of service
              </Typography>
            </Link>
            <Link to="">
              <Typography color="#ffffff" paragraph>
                Privacy policy
              </Typography>
            </Link>
            <Link to="">
              <Typography color="#ffffff" paragraph>
                Support us
              </Typography>
            </Link>
          </Stack>
          <Stack direction="column" width="30%">
            <Typography variant="h6" sx={{ color: "#ffffff" }}>
              Sign up for our newsletter!
            </Typography>
            <TextField
              size="small"
              placeholder="Enter your email"
              className={classes.emailQueryField}
            />
            <Button
              className={classes.emailQueryButton}
              variant="contained"
              color="secondary"
            >
              Submit
            </Button>{" "}
          </Stack>
        </Box>
      </Box>
    </CacheProvider>
  );
}

export default DarkFooter;
