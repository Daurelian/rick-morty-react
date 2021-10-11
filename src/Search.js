import React from "react";
export default function Search(props) {
  function searchCharacter(event) {
    props.setSearchWord(event.target.value);
    return;
  }
  function radioStatus(event) {
    props.setStatus(event.target.value);
    return;
  }

  return (
    <>
      <fieldset id="searchbar-input">
        <span>Cerca il tuo personaggio</span>
        <input
          type="text"
          id="search"
          name="search"
          required
          size="20"
          onChange={searchCharacter}
        />
      </fieldset>

      <fieldset id="radio-group" onChange={radioStatus}>
        <input type="radio" id="alive" name="radio_status" value="alive" /> {" "}
        <label>Alive</label>
          <input
          type="radio"
          id="dead"
          name="radio_status"
          value="dead"
        />  <label>Dead</label>
          <input
          type="radio"
          id="unknow"
          name="radio_status"
          value="unknow"
        />  <label>Unknow</label>
      </fieldset>
    </>
  );
}
