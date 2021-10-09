import React, {useState} from "react";
import axios from "axios";
export default function Search(props){


    function searchCharacter (event){
        props.setSearchWord(event.target.value);
        return 
    }
    console.log("digitato:", props.searchWord);
    function radioStatus(event){
        props.setStatus(event.target.value)
        return 
    }

    console.log("status:",props.status)
return (
    <>
    <span >Cerca il tuo personaggio</span>
<input type="text" id="search" name="search" required
       size="20" onChange={searchCharacter}/> 
       {/* <button type="submit">Search</button> */}
       <input type="radio" id="alive" name="fav_language" value="alive" onChange={radioStatus}/>
  <label for="alive">Alive</label>
  <input type="radio" id="dead" name="fav_language" value="dead" onChange={radioStatus}/>
  <label for="dead">Dead</label>
  <input type="radio" id="unknow" name="fav_language" value="unknow" onChange={radioStatus}/>
  <label for="unknow">Unknow</label>
       </>

)

}