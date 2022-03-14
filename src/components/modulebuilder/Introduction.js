import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

import ScrollToTop from "../ScrollToTop";
import guidePhoto from "../../images/guide-photo.png";
import engagementPhoto from "../../images/engagement-photo.png";
import exercisePhoto from "../../images/exercise-photo.png";
import handoffPhoto from "../../images/handoff-photo.png";

const SECTIONTITLES = [
  { index: 1, title: "Guide Section" },
  { index: 2, title: "Engagement Section" },
  { index: 3, title: "Exercises" },
  { index: 4, title: "Handoff" },
];
const SECTIONPHOTOS = [
  guidePhoto,
  engagementPhoto,
  exercisePhoto,
  handoffPhoto,
];

function ModuleBuilderIntroduction(props) {
  function handleClick() {
    props.advanceToNextTab();
    ScrollToTop();
  }
  const introSections = SECTIONTITLES.map((section, index) => {
    return (
      <React.Fragment key={section.index}>
        <Grid item xs={12}>
          <Link>
            {section.index}. {section.title}
          </Link>
        </Grid>
        <Grid item xs={4}>
          <img src={SECTIONPHOTOS[index]} alt="display photo" />
        </Grid>
        <Grid item xs={8} component={Box}>
          <Typography paragraph sx={{ color: "neutral.main" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit
            amet aliquam velit. Vivamus vitae vestibulum risus. Maecenas feugiat
            neque dolor, nec finibus nibh scelerisque nec. Vivamus auctor, nulla
            et bibendum ultricies, turpis mauris mollis quam, ut pulvinar nisi
            tellus et urna.
          </Typography>
        </Grid>
      </React.Fragment>
    );
  });

  return (
    <Grid
      container
      rowSpacing={5}
      columnSpacing={2}
      sx={{ backgroundColor: "#262626", padding: "20px", mt:"-32px" }}
    >
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ color: "neutral.main" }}>
          Welcome to Module builder!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography paragraph sx={{ color: "neutral.main" }}>
          Your module can consist of:
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container rowSpacing={4} columnSpacing={3}>
          {introSections}
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Button color="secondary" variant="contained" onClick={handleClick}>
          Start Creating
        </Button>
      </Grid>
    </Grid>
  );
}

export default ModuleBuilderIntroduction;
