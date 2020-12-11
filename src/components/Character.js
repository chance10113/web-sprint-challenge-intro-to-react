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
    //image,
    // episode,
    // url,
    created,
  } = characterData;

  return (
    <StyledSection>
      <StyledH3>{name}</StyledH3>
      <div>
      <StyledP> Id: {id} </StyledP>
      <StyledP> Status: {status} </StyledP>
      <StyledP> Species: {species} </StyledP>
      { type === ""?  <StyledP>  Type: Normal  </StyledP>  : <StyledP>  Type: {type}  </StyledP> }
      
      <StyledP> Gender: {gender} </StyledP>
      {/* <StyledP>   origin: {origin} </StyledP> */}
      {/* <StyledP>  location: {location} </StyledP> */}
      {/* <Styledimg alt= 'steve' src = {image} >  </Styledimg> */}
      {/* <StyledP> episode: {episode} </StyledP>
      <StyledP> url: {url} </StyledP> */}
      <StyledP> Created: {created} </StyledP>
      </div>
      
    </StyledSection>
  );
}

const StyledSection = styled.section`
background-color: ${(pr)=> (pr.theme.primaryColor) } ;
background-repeat: no-repeat;
text-align: center;
color: ${(pr)=> (pr.theme.black)};

`

const StyledH3 = styled.h3`

`

const StyledP = styled.p`

`

const Styledimg = styled.img`

`