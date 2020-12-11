// Write your Character component here
import React from "react";
import styled from "styled-components";

export default function Character({ characterData }) {
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
// console.log(characterData)
  return (
    // <header>
        
    // </header>

        <div>
        <h2> 
           {characterData.name} 
        </h2>








        </div>




  )

  //   GOTTA FIGURE OUT HOW TO DISPLAY ALL Data, AND MAP IT OVER!!!
  //   MAP HERE OR IN APP?
  //   PROLLY APP
}

// MAP IN APP, PASSING THROUGH ID NUMBER,
//THEN USE ID NUMBER AS IDENTIFIER FOR CHARACTER DISPLAY FUNCTION HERE
