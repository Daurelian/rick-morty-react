import Characters from "./Characters";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React, { useState } from "react";
import Navigation from "./Navigation";
import SingleCharacter from "./singleCharacter";
import Search from "./Search";

function App() {
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [character, setCharacter] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [status, setStatus] = useState(undefined);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/:id">
            <SingleCharacter setStatus={setStatus} character={character} />
          </Route>
          <Route path="">
            <Search
              setSearchWord={setSearchWord}
              status={status}
              setStatus={setStatus}
            />
            <Navigation page={page} setPage={setPage} maxPage={maxPage} />
            <Characters
              page={page}
              setPage={setPage}
              setMaxPage={setMaxPage}
              character={character}
              setCharacter={setCharacter}
              searchWord={searchWord}
              status={status}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
