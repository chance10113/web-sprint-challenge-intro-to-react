// Write your Character component here
import React from "react";
import styled from "styled-components";

export default function CharacterCard({ characterData }) {
  const {
    id,
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    image,
    episode,
    url,
    created,
  } = characterData;

//   const Map = () => {
//       characterData.map((characterData) => {
//           console.log(Map())
//       }
//       )};
console.log(characterData)
  return (
  

        <div>
        <h2> 
           {name} 
        </h2>








        </div>




  )

  //   GOTTA FIGURE OUT HOW TO DISPLAY ALL Data, AND MAP IT OVER!!!
  //   MAP HERE OR IN APP?
  //   PROLLY APP
}

// MAP IN APP, PASSING THROUGH ID NUMBER,
//THEN USE ID NUMBER AS IDENTIFIER FOR CHARACTER DISPLAY FUNCTION HERE


//MAYBE FOR EACH THROUGH THE ARRAY, RUNNING THROUGH THE CHARACTER CARD?