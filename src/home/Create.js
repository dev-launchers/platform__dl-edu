import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { NavLink } from "react-router-dom";

import classes from "./Create.module.css";
import ArrowRight from "../images/arrow-right.png";
import SquareDesign1 from "../components/designsquares/SquareDesign1";
import SquareDesign2 from "../components/designsquares/SquareDesign2";
import SquareDesign3 from "../components/designsquares/SquareDesign3";
import ScrollToTop from "../components/ScrollToTop";

//override default mui styling
const cache = createCache({
  key: "css",
  prepend: true,
});

const ResponsiveBox = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
  },
}));

function Create() {
  const CREATEBOX = [
    {
      title: "Concept Modules",
      design: (
        <Box className={classes.descriptionsContainer}>
          <SquareDesign1 />
          <SquareDesign1 />
        </Box>
      ),
    },
    {
      title: "Program Modules",
      design: (
        <>
          <SquareDesign2 />
        </>
      ),
    },
    {
      title: "Code Challenge Modules",
      design: (
        <>
          <SquareDesign3 />
        </>
      ),
    },
  ];

  return (
    <CacheProvider value={cache}>
      <ResponsiveBox
        className="target-create"
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#181818",
          paddingBottom: "100px",
          alignItems: "center",
        }}
      >
        <Container
          component={Typography}
          variant={"h2"}
          className={classes.create}
        >
          Create
        </Container>
        <Box className={classes.createContainer}>
          {CREATEBOX.map((createBox) => {
            return (
              <Box className={classes.createDescriptionContainer}>
                {createBox.design}
                <Typography variant="h5" sx={{ color: "#ffffff" }}>
                  {createBox.title}
                </Typography>
                <Typography paragraph sx={{ color: "#ffffff" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Venenatis scelerisque at quam congue posuere libero in sit
                  quam.
                </Typography>
                <Box display="flex">
                  <Link
                    component={NavLink}
                    to="/main-content/build"
                    paragraph
                    underline="none"
                    sx={{ color: "#81C3D7", cursor: "pointer" }}
                    onClick={() => ScrollToTop()}
                  >
                    Try it <img src={ArrowRight} alt="null" />
                  </Link>
                </Box>
              </Box>
            );
          })}
        </Box>
      </ResponsiveBox>
    </CacheProvider>
  );
}

export default Create;
