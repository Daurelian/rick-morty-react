import React, {useState, useEffect} from "react";
import { Container, Grid } from "@mui/material";
import Character from "./Character";
import axios from 'axios'

export default function Characters() {
  const[character, setCharacter]=useState([])
  const [image, setImage]=useState("")
  const [name,setName]=useState("")
  
  
  useEffect(()=>{
    async function fetchData(){
      const result= await axios.get (`https://rickandmortyapi.com/api/character?page=1`);
      console.log(result)
      setCharacter(result.data.results)

    }
    fetchData() ;
  },[]);



  return (
    <Container fixed sx={{ mt: 4 }}>
      <Grid container spacing={2}>
      {character.map((character)=>( <Grid item xs={3}>
          <Character image={character.image} name={character.name}/>
        </Grid>))}
        
      </Grid>
    </Container>
  );
}
