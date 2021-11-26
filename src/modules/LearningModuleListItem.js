import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

import "./LearningModuleListItem.css";

function LearningModuleListItem(props) {
  //override default mui styling
  const cache = createCache({
    key: "css",
    prepend: true,
  });

  return (
    <CacheProvider value={cache}>
      <Card raised className="module-list-item">
        <Link to={"/main-content/learning-module/" + props.moduleMetadata.id}>
          <Container className="module-list-item-inner-container">
            <Typography
              variant="h2"
              sx={{ fontFamily: "Roboto", fontWeight: "500" }}
            >
              {props.moduleMetadata.title}
            </Typography>
            <Typography variant="h5" sx={{ fontFamily: "Roboto" }}>
              {props.moduleMetadata.description}
            </Typography>
            <Container className="keyword-container">
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
            </Container>
          </Container>
        </Link>
      </Card>
    </CacheProvider>
  );
}

export default LearningModuleListItem;
