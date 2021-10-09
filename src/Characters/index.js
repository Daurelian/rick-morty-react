import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Character from "./Character";
import axios from "axios";

export default function Characters(props) {
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${props.page}`
      );
      // console.log(result.data.results);
      if (result.status === 200) {
        props.setCharacter(result.data.results);
        props.setMaxPage(result.data.info.pages);
      }
    }
    fetchData();
  }, [props.page]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `https://rickandmortyapi.com/api/character/?name=${props.searchWord}`
      );
      // console.log(result.data.results);
      if (result.status === 200) {
        props.setCharacter(result.data.results);
        props.setMaxPage(result.data.info.pages);
      }
    }
    fetchData();
  }, [props.searchWord]);

  return (
    <Container fixed sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        {props.character.map((character) => (
          <Grid item xs={3} key={character.id}>
            <Character
              image={character.image}
              name={character.name}
              id={character.id}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
