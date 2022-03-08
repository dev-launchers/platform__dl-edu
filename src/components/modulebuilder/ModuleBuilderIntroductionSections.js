/* import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";


function ModuleBuilderIntroductionSections() {
  const introSections = SECTIONTITLES.map((section) => {
    return (
      <React.Fragment key={section.index}>
        <Grid item xs={12} >
          <Link>
            {section.index}. {section.title}
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ backgroundColor: "#c4c4c4", height:"150px", width:"250px" }}></Box>
        </Grid>
        <Grid item xs={8} component={Box}>
          <Typography paragraph>
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
    
  );
}

export default ModuleBuilderIntroductionSections;
 */