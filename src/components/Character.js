import React from "react";
import styled from "styled-components";

export default function characterCard({ characterData }) {
  const { id, name, status, species, type, gender, created } = characterData;

  return (
    <StyledSection>
      <StyledH3>{name}</StyledH3>
      <StyledDiv>
        <p> Id: {id} </p>
        <p> Status: {status} </p>
        <p> Species: {species} </p>
        {type === "" ? <p> Type: Normal </p> : <p> Type: {type} </p>}
        <p> Gender: {gender} </p>
        <p> Created: {created} </p>
      </StyledDiv>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  font-size: 1.3rem;
  color: ${(pr) => pr.theme.black};
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledH3 = styled.h3`
  font-size: 1.55rem;
  font-weight: bold;
`;
