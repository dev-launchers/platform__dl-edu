import React from "react";
import { Link } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab"
import EditIcon from '@mui/icons-material/Edit';
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import ScrollToTop from "../components/ScrollToTop";
import classes from "./MyModulesListItem.module.css";

function MyModulesListItem(props) {
  //override default mui styling
  const cache = createCache({
    key: "css",
    prepend: true,
  });

  return (
    <>
      <CssBaseline />
      <CacheProvider value={cache}>
        <Card raised className={classes.myModuleBox}>
          <Link
            to={
              "/main-content/learning-module/module-id=" +
              props.moduleMetadata.id
            }
            onClick={ScrollToTop}
          >
            <Container className={classes.myModuleContent}>
              <Typography
                variant="h4"
                sx={{ fontFamily: "Roboto", fontWeight: "500" }}
              >
                {props.moduleMetadata.title}
              </Typography>
              <Typography className={classes.moduleDescription} variant="p" sx={{ fontFamily: "Roboto" }}>
                {props.moduleMetadata.description}
              </Typography>
              <Container className={classes.keywordsContainer}>
                {props.moduleMetadata.keyWords.map((keyword, index) => {
                  return (
                    <Button
                      size="small"
                      variant="contained"
                      className={classes.keyword}
                      key={index}
                    >
                      {keyword}
                    </Button>
                  );
                })}
              </Container>
              {/* TODO: onclick, go to edit module. Right now clicking just opens module details */}
              <Fab className={classes.moduleEditIcon} color="primary">
                <EditIcon />
              </Fab>
            </Container>
          </Link>
        </Card>
      </CacheProvider>
    </>
  );
}

export default MyModulesListItem;
