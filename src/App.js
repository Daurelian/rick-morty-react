import Characters from "./Characters";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React, {useState} from "react";
import Navigation from "./Navigation";
import SingleCharacter from "./singleCharacter";
// import { Router } from "@mui/icons-material";


function App() {
  const [page, setPage]= useState(1)
  const [maxPage, setMaxPage] =useState(0)
  return (
    <Router>
    <div className='App'>
    <Switch>
       <Route path="/singleCharacter">
      <SingleCharacter />
      </Route>
    <Route path="/">
      <Navigation page={page} setPage={setPage} maxPage={maxPage}/>
      <Characters page={page} setPage={setPage} setMaxPage={setMaxPage}/>
      </Route>
      </Switch>
    </div>
     </Router>
  );
  
}

export default App;
