import React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import javaScriptLogo from "../images/javascript-logo 1.png";
import pythonLogo from "../images/python-logo 1.png";
import exploreLogo from "../images/exploration-symbol.png";
import implementationLogo from "../images/implementation-symbol.png";
import sharingLogo from "../images/sharing-symbol.png";

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
        <Container maxWidth={false} className={classes.mainContainer}>
          <Container className={classes.learnTextContainer}>
            <Typography variant="h2" className={classes.learnText}>
              Learn
            </Typography>
          </Container>
          <Container className={classes.pythonJavaContainer}>
            <Card className={classes.pythonJavaCard}>
              <img src={javaScriptLogo} alt="null" />
              <Typography variant="h5">Java</Typography>
              <Button className={classes.pythonJavaButton}>Start now</Button>
            </Card>
            <Card className={classes.pythonJavaCard}>
              <img src={pythonLogo} alt="null" />
              <Typography variant="h5">Python</Typography>
              <Button className={classes.pythonJavaButton}>Start now</Button>
            </Card>
          </Container>
          <Container className={classes.createDetailContainer}>
            <Container className={classes.detailTitleContainer}>
              <Typography variant="h2">Create</Typography>
            </Container>
            <Container className={classes.detailTextContainer}>
              <Typography variant="h3">
                Module builder allows you to create your own modules!
              </Typography>
              <Typography paragraph={true}>
                Learn through practice and application and contribuite to the
                community at the same time.
              </Typography>
            </Container>
          </Container>
          <Container className={classes.advantagesContainer}>
            <Container className={classes.advantagesTitleContainer}>
              <Typography variant="h2">
                Advantages of learning with us
              </Typography>
            </Container>
            <Card className={classes.advantagesLogo}>
              <img src={exploreLogo} alt="null" />
              <Typography variant="h4">Explore</Typography>
              <Typography paragraph={true}>lorem ipsum</Typography>
            </Card>
            <Card className={classes.advantagesLogo}>
              <img src={implementationLogo} alt="null" />{" "}
              <Typography variant="h4">Implementation</Typography>
              <Typography paragraph={true}>lorem ipsum</Typography>
            </Card>
            <Card className={classes.advantagesLogo}>
              <img src={sharingLogo} alt="null" />
              <Typography variant="h4">Sharing</Typography>
              <Typography paragraph={true}>lorem ipsum</Typography>
            </Card>
          </Container>
        </Container>
      </CacheProvider>
    </>
  );
}

export default DarkLearnSection;
