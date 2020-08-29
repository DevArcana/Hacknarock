import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";

export const Loading = () => (
  <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: "100vh" }}
  >
    <Grid item>
      <CircularProgress />
    </Grid>
  </Grid>
);
