import React from "react";
import { Link } from "react-router-dom";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import bottomImage from "../images/bottomcomputerimage.png";
import middleImage from "../images/middlecomputerimage.png";
import topImage from "../images/topcomputerimage.png";

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
          <Container sx={{ width: "50%" }}>
            <Typography
              variant="h1"
              sx={{ color: "#ffffff", textAlign: "center", fontWeight: "800" }}
            >
              Learn With Our Modules
            </Typography>
            </Container>
            <Box sx={{ width: "100%", display: "flex", justifyContent:"space-around" }}>
              <Container sx={{ width:"40%"}}>
                <Container sx={{ position:"relative", height:"500px" }}>
                  <img src={bottomImage} alt="null" className={classes.bottomImage} />
                  <img src={middleImage} alt="null" className={classes.middleImage} />
                  <img src={topImage} alt="null" className={classes.topImage} />
                </Container>
              </Container>
              <Container sx={{ width:"30%" }}>
                <List>
                  <ListItem
                    sx={{
                      color: "#ffffff",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                    }}
                  >
                    <Container className={classes.listTitle}>
                      <div className={classes.disc} />
                      <Typography variant="h6" sx={{ textAlign: "left", fontWeight:"600" }}>
                        Guides
                      </Typography>
                    </Container>
                    <Typography paragraph sx={{ fontWeight:"400"}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Venenatis scelerisque at quam congue posuere libero in sit
                      quam. Consequat, scelerisque non tincidunt sit lectus
                      senectus.
                    </Typography>
                  </ListItem>
                  <ListItem
                    sx={{
                      color: "#ffffff",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                    }}
                  >
                    <Container className={classes.listTitle}>
                      <div className={classes.disc1} />
                      <Typography variant="h6" sx={{ textAlign: "left", fontWeight:"600" }}>
                        Interactive Code Examples
                      </Typography>
                    </Container>
                    <Typography paragraph sx={{ fontWeight:"400"}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Venenatis scelerisque at quam congue posuere libero in sit
                      quam. Consequat, scelerisque non tincidunt sit lectus
                      senectus.
                    </Typography>
                  </ListItem>
                  <ListItem
                    sx={{
                      color: "#ffffff",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                    }}
                  >
                    <Container className={classes.listTitle}>
                      <div className={classes.disc2} />
                      <Typography variant="h6" sx={{ textAlign: "left", fontWeight:"600" }}>
                        Exercises
                      </Typography>
                    </Container>
                    <Typography paragraph sx={{ fontWeight:"400"}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Venenatis scelerisque at quam congue posuere libero in sit
                      quam. Consequat, scelerisque non tincidunt sit lectus
                      senectus.
                    </Typography>
                  </ListItem>
                </List>
              </Container>
            </Box>
        </Box>
      </CacheProvider>
    </>
  );
}

export default DarkLearnSection;
