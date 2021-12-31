import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import ModuleBuilderIntroductionSections from "./ModuleBuilderIntroductionSections";

function ModuleBuilderIntroduction() {
  return (
    <Grid container rowSpacing={5} columnSpacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">Welcome to concept Module builder!</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography paragraph>Your module can consist of:</Typography> 
      </Grid>
      <Grid item xs={12}>
        <ModuleBuilderIntroductionSections />
      </Grid>
      <Grid item xs={4}>
        <Button color="brightBlue" variant="contained" size="small">
          Start Creating
        </Button>
      </Grid>
    </Grid>
  );
}

export default ModuleBuilderIntroduction;
