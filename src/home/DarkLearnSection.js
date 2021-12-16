import React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import computerImage from "../images/computer-image.png";

import classes from "./DarkLearnSection.module.css";

//override default mui styling
const cache = createCache({
  key: "css",
  prepend: true,
});

function DarkLearnSection() {
  return (
    <>
      <CacheProvider value={cache}>
        <Box className={classes.darkLearnContainer}>
          <Box
            component={Typography}
            variant={"h2"}
            className={classes.learnWithUsText}
          >
            Learn With Our Modules
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Container className={classes.imageContainer}>
              <Container sx={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
                <img
                  src={computerImage}
                  alt="null"
                  className="classes.computerImage"
                />
              </Container>
            </Container>
            <Box className={classes.descriptionContainer}>
              <List>
                <ListItem className={classes.rightGuideContainer}>
                  <Container className={classes.listTitle}>
                    <div className={classes.disc} />
                    <Typography
                      variant="h6"
                      className={classes.descriptionTitles}
                    >
                      Guides
                    </Typography>
                  </Container>
                  <Typography paragraph sx={{ fontWeight: "400" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Venenatis scelerisque at quam congue posuere libero in sit
                    quam. Consequat, scelerisque non tincidunt sit lectus
                    senectus.
                  </Typography>
                </ListItem>
                <ListItem className={classes.rightGuideContainer}>
                  <Container className={classes.listTitle}>
                    <div className={classes.disc1} />
                    <Typography
                      variant="h6"
                      className={classes.descriptionTitles}
                    >
                      Interactive Code Examples
                    </Typography>
                  </Container>
                  <Typography paragraph sx={{ fontWeight: "400" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Venenatis scelerisque at quam congue posuere libero in sit
                    quam. Consequat, scelerisque non tincidunt sit lectus
                    senectus.
                  </Typography>
                </ListItem>
                <ListItem className={classes.rightGuideContainer}>
                  <Container className={classes.listTitle}>
                    <div className={classes.disc2} />
                    <Typography
                      variant="h6"
                      className={classes.descriptionTitles}
                    >
                      Exercises
                    </Typography>
                  </Container>
                  <Typography paragraph sx={{ fontWeight: "400" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Venenatis scelerisque at quam congue posuere libero in sit
                    quam. Consequat, scelerisque non tincidunt sit lectus
                    senectus.
                  </Typography>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </CacheProvider>
    </>
  );
}

export default DarkLearnSection;
