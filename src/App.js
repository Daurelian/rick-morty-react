import Characters from "./Characters";

import React, {useState} from "react";
import Navigation from "./Navigation";

function App() {
  const [page, setPage]= useState(1)
  const [maxPage, setMaxPage] =useState(0)
  return (
    <div className='App'>
      <Navigation page={page} setPage={setPage} maxPage={maxPage}/>
      <Characters page={page} setPage={setPage} setMaxPage={setMaxPage}/>
    </div>
  );
}

export default App;
