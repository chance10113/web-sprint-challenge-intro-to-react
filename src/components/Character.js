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

  return (
    <header>
        <h2> STEVE </h2>
    </header>




  )

  //   GOTTA FIGURE OUT HOW TO DISPLAY ALL Data, AND MAP IT OVER!!!
  //   MAP HERE OR IN APP?
  //   PROLLY APP
}

// MAP IN APP, PASSING THROUGH ID NUMBER,
//THEN USE ID NUMBER AS IDENTIFIER FOR CHARACTER DISPLAY FUNCTION HERE
