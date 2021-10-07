import React from "react";
import { Container, Grid } from "@mui/material";
import Character from "./Character";

export default function Characters() {
  return (
    <Container fixed sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Character />
        </Grid>
        <Grid item xs={3}>
          <Character />
        </Grid>
        <Grid item xs={3}>
          <Character />
        </Grid>
        <Grid item xs={3}>
          <Character />
        </Grid>
      </Grid>
    </Container>
  );
}
