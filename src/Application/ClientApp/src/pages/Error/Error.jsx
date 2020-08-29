import React from "react";
import { Grid, Typography } from "@material-ui/core";

const Error = (error) => (
  <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: "100vh" }}
  >
    <Grid item>
      <Typography color={"error"}>Error: {error.error.message}</Typography>
    </Grid>
  </Grid>
);

export default Error;
