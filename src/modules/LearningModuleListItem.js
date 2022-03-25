import React from "react";
import { Link } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import ScrollToTop from "../components/ScrollToTop";

import "./LearningModuleListItem.css";

function LearningModuleListItem(props) {
  //override default mui styling
  const cache = createCache({
    key: "css",
    prepend: true,
  });

  return (
    <>
      <CssBaseline />
      <CacheProvider value={cache}>
        <Card raised className="module-list-item" sx={{ background: "linear-gradient(358.98deg, #262626 0.96%, #343434 99.21%)",  }}>
          <Link
            to={
              "/main-content/learning-module/module-id=" +
              props.moduleMetadata.id
            }
            onClick={ScrollToTop}
          >
            <Box className="module-list-item-inner-container">
              <Typography
                variant="h3"
                sx={{ fontWeight: "500", color:"#ffffff" }}
              >
                {props.moduleMetadata.title}
              </Typography>
              <Typography paragraph sx={{ color:"#ababab" }}>
                {props.moduleMetadata.description}
              </Typography>
              <Box className="keyword-container">
                {props.moduleMetadata.keyWords.map((keyword, index) => {
                  return (
                    <Button
                      size="small"
                      variant="contained"
                      className="keyword-chip"
                      key={index}
                    >
                      {keyword}
                    </Button>
                  );
                })}
              </Box>
            </Box>
          </Link>
        </Card>
      </CacheProvider>
    </>
  );
}

export default LearningModuleListItem;
