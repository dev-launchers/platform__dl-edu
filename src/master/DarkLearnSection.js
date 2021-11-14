import React from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import explorationIcon from "../images/exploration.png";
import implementationIcon from "../images/Implementation.png";
import sharingIcon from "../images/sharing.png";
import javaScriptLogo from "../images/javascript-logo 1.png";
import pythonLogo from "../images/python-logo 1.png";

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
          <Container className={classes.learnJavaPythonContainer}>
            <Container className={classes.learnTextContainer}>
              <Typography variant="h2" className={classes.learnText}>
                Learn
              </Typography>
            </Container>
            <Container className={classes.pythonJavaContainer}>
              <Card raised={true} className={classes.pythonJavaCard}>
                <img
                  className={classes.pythonJavaImg}
                  src={javaScriptLogo}
                  alt="null"
                />
                <Typography
                  variant="h5"
                  sx={{ margin: "auto", color: "#ffffff" }}
                >
                  Java
                </Typography>
                <Button variant='contained' color='secondary' className={classes.pythonJavaButton}>Start now</Button>
              </Card>
              <Card raised={true} className={classes.pythonJavaCard}>
                <img
                  className={classes.pythonJavaImg}
                  src={pythonLogo}
                  alt="null"
                />
                <Typography
                  variant="h5"
                  sx={{ margin: "auto", color: "#ffffff" }}
                >
                  Python
                </Typography>
                <Button variant='contained' color='secondary'className={classes.pythonJavaButton}>Start now</Button>
              </Card>
            </Container>
          </Container>
          <Container className={classes.createDetailContainer}>
            <Container className={classes.detailTitleContainer}>
              <Typography variant="h2" className={classes.createText}>
                Create
              </Typography>
            </Container>
            <Card raised={true} className={classes.detailTextCard}>
              <Typography variant="h4" align="center">
                Module builder allows you to create your own modules!
              </Typography>
              <br />
              <Typography variant="h5" align="center">
                Learn through practice and application and contribuite to the
                community at the same time.
              </Typography>
            </Card>
          </Container>
          <Container className={classes.advantagesTitleContainer}>
            <Typography className={classes.advantagesText} variant="h2">
              Advantages of learning with us
            </Typography>
          </Container>
          <Container className={classes.advantagesCardContainer}>
            <Card raised={true} className={classes.advantagesCard}>
              <img
                className={classes.advantagesImage}
                src={explorationIcon}
                alt="null"
              />
              <Typography variant="h4">Explore</Typography>
              <Typography align='center' paragraph={true}>
                Eget id massa, non diam quam egestas. Tortor commodo nam
                tristique ipsum odio lorem.
              </Typography>
            </Card>
            <Card raised={true} className={classes.advantagesCard}>
              <img
                className={classes.advantagesImage}
                src={implementationIcon}
                alt="null"
              />
              <Typography variant="h4">Implementation</Typography>
              <Typography align='center' paragraph={true}>
                Eget id massa, non diam quam egestas. Tortor commodo nam
                tristique ipsum odio lorem.
              </Typography>
            </Card>
            <Card raised={true} className={classes.advantagesCard}>
              <img
                className={classes.advantagesImage}
                src={sharingIcon}
                alt="null"
              />
              <Typography variant="h4">Sharing</Typography>
              <Typography align='center' paragraph={true}>
                Eget id massa, non diam quam egestas. Tortor commodo nam
                tristique ipsum odio lorem.
              </Typography>
            </Card>
          </Container>
        </Container>
      </CacheProvider>
    </>
  );
}

export default DarkLearnSection;
