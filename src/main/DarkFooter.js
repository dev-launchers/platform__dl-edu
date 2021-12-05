import React from "react";
import { CacheProvider } from "@emotion/react";
import { styled } from "@mui/system";
import createCache from "@emotion/cache";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
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
        <Container className={classes.leftContainer}>
          <Stack direction="column" spacing={3}>
            <Box
              display="flex"
              width="65%"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <img src={devLaunchersIcon} className={classes.footerImage} />
              <Typography variant="h5" className={classes.dlBasecamp}>
                DL Basecamp
              </Typography>
            </Box>
            <Box>
              <Typography color="#ffffff" paragraph>
                Copyright © 2021 DevLauchers.
              </Typography>
              <Typography color="#ffffff" paragraph>
                All rights reserved
              </Typography>
            </Box>
            <Box className={classes.imagesContainer}>
              <Link href="http://www.instagram.com" className={classes.iconLink}>
                <img
                  src={instagramIcon}
                  alt="null"
                  className={classes.footerImage}
                />
              </Link>
              <Link href="http://www.linkedin.com" className={classes.iconLink}>
                <img
                  src={linkedinIcon}
                  alt="null"
                  className={classes.footerImage}
                />
              </Link>
              <Link href="http://www.twitch.tv" className={classes.iconLink}>
                <img
                  src={twitchIcon}
                  alt="null"
                  className={classes.footerImage}
                />
              </Link>
              <Link href="http://www.discord.com" className={classes.iconLink}>
                <img
                  src={discordIcon}
                  alt="null"
                  className={classes.footerImage}
                />
              </Link>
            </Box>
          </Stack>
        </Container>
        <Box className={classes.rightContainer}>
          <Stack direction="column" width="15%" spacing={2}>
            <Typography color="#ffffff" variant="h6">
              Company
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link underline="none" href="http://www.espn.com">
                <Typography color="#ffffff" paragraph>
                  About us
                </Typography>
              </Link>
              <Link underline="none" href="">
                <Typography color="#ffffff" paragraph>
                  Contact us
                </Typography>
              </Link>
            </Box>
          </Stack>
          <Stack direction="column" width="15%" spacing={2}>
            <Typography color="#ffffff" variant="h6">
              Support
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link underline="none" href="">
                <Typography color="#ffffff" paragraph>
                  Terms of service
                </Typography>
              </Link>
              <Link underline="none" href="">
                <Typography color="#ffffff" paragraph>
                  Privacy policy
                </Typography>
              </Link>
              <Link underline="none" href="">
                <Typography color="#ffffff" paragraph>
                  Support us
                </Typography>
              </Link>
            </Box>
          </Stack>
          <Stack direction="column" width="30%" spacing={2}>
            <Typography variant="h6" sx={{ color: "#ffffff" }}>
              Sign up for our newsletter!
            </Typography>
            <Box display="flex">
              <input
                placeholder="Enter your email"
                className={classes.emailQueryField}
              />
              <Button
                className={classes.emailQueryButton}
                variant="contained"
                color="secondary"
              >
                Submit
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </CacheProvider>
  );
}

export default DarkFooter;
