import React, {useState, useEffect} from "react";
import axios from 'axios';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";

export default function SingleCharacter(props){
    const [singleCharacter, setSingleCharacter]=useState({})
    

    // ${props.character.id}
    console.log("i miei",props.character)
    let {id} = useParams();
   
    console.log(id)
   


    useEffect(()=>{
        async function fetchData(){
          const result= await axios.get (`https://rickandmortyapi.com/api/character/${id}`);
        //  console.log(result.data)
          if (result.status===200)  {
        setSingleCharacter(result.data)
          }
    
        }
        fetchData() ;
      },[]);

     

return (
<Card sx={{ maxWidth: 600 }}>
    <CardActionArea>
      <CardMedia
        component='img'
        alt='green iguana'
        height='140'
        image={singleCharacter.image}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {singleCharacter.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      
    </CardActions>
  </Card>
  ) 




}