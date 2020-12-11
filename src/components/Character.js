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

  return (
    <div>
      <h3>{name}</h3>
      <p> id: {id} </p>
      <p> status: {status} </p>
      <p> species: {species} </p>
      <p> type: {type} </p>
      <p> gender: {gender} </p>
      {/* <p>   origin: {origin} </p> */}
      {/* <p>  location: {location} </p> */}
      {/* <img alt= 'steve'> url({image}) </img> */}
      <p> episode: {episode} </p>
      <p> url: {url} </p>
      <p> created: {created} </p>
    </div>
  );
}
