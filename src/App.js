import Characters from "./Characters";
import axios from 'axios';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import React, {useState, useEffect} from "react";
import Navigation from "./Navigation";
import SingleCharacter from "./singleCharacter";
// import { Router } from "@mui/icons-material";


function App() {
  const [page, setPage]= useState(1)
  const [maxPage, setMaxPage] =useState(0)
  const[character, setCharacter]=useState([])

  // useEffect(()=>{
  //   async function fetchData(){
  //     const result= await axios.get (`https://rickandmortyapi.com/api/character?page=${page}`);
  //     console.log(result.data.results)
  //     if (result.status===200)  {
  //       setCharacter(result.data.results)
  //     setMaxPage(result.data.info.pages)}

  //   }
  //   fetchData() ;
  // },[page]);



  return (
    <Router>
    <div className='App'>
    <Switch>
       <Route path="/:id">
      <SingleCharacter character={character} />
      </Route>
    <Route path="">
      <Navigation page={page} setPage={setPage} maxPage={maxPage}/>
      <Characters page={page} setPage={setPage} setMaxPage={setMaxPage} character={character} setCharacter={setCharacter}/>
      </Route>
      </Switch>
    </div>
     </Router>
  );
  
}

export default App;
