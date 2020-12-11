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
    // origin,
    // location,
    image,
    episode,
    url,
    created,
  } = characterData;

  return (
    <section>
      <h3>{name}</h3>
      <p> id: {id} </p>
      <p> status: {status} </p>
      <p> species: {species} </p>
      <p> type: {type} </p>
      <p> gender: {gender} </p>
      {/* <p>   origin: {origin} </p> */}
      {/* <p>  location: {location} </p> */}
      {/* <img alt= 'steve' src = {image} >  </img> */}
      <p> episode: {episode} </p>
      <p> url: {url} </p>
      <p> created: {created} </p>
    </section>
  );
}

const StyledSection = styled.section`

`

const StyledH3 = styled.h3`

`

const StyledP = styled.p`

`

const Styledimg = styled.img`

`