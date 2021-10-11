import React, { useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Character from "./Character";
import axios from "axios";

export default function Characters({page,status,searchWord,setCharacter,setMaxPage,character}) {
  //-----------------Cambio Pagina & Ricerca risultati in base al nome & status
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${page}&name=${searchWord ?? ""}&status=${status ?? ""}`
      );
      // console.log(result.data.results);
      if (result.status === 200) {
        setCharacter(result.data.results);
        setMaxPage(result.data.info.pages);
      }
    }
    fetchData();
  }, [page,searchWord,status]);

  return (
    <Container fixed sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        {character.map((character) => (
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



  // //---------------------Ricerca -- deletata perchè inglobata su
  // useEffect(() => {
  //   if (status === undefined) return;
  //   else {
  //     async function fetchData() {
  //       const result = await axios.get(
  //         `https://rickandmortyapi.com/api/character/?name=${searchWord}&status=${status}`
  //       );
  //       // console.log(result.data.results);
  //       if (result.status === 200) {
  //         setCharacter(result.data.results);
  //         setMaxPage(result.data.info.pages);
  //       }
  //     }
  //     fetchData();
  //   }
  // }, [searchWord, status]);