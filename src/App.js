import Characters from "./Characters";
import axios from 'axios';
import React, {useState,useEffect} from "react";
import Navigation from "./Navigation";

function App() {
  const [page, setPage]= useState(1)
  return (
    <div className='App'>
      <Navigation page={page} setPage={setPage}/>
      <Characters page={page} setPage={setPage}/>
    </div>
  );
}

export default App;
