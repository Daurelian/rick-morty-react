import React, {useState} from "react";
import axios from "axios";
export default function Search(props){


    function searchCharacter (event){
        props.setSearchWord(event.target.value);
        return console.log(props.searchWord);
    }



return (
    <>
    <span >Cerca il tuo personaggio</span>
<input type="text" id="search" name="search" required
       size="20" onChange={searchCharacter}/> 
       <button type="submit">Search</button>
       </>

)

}