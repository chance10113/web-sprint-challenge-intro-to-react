import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";
import styled from "styled-components";

const characterDataDefault = {
  id: 0,
  name: "",
  status: "",
  species: "",
  type: "",
  gender: "",
  origin: {},
  location: {},
  image: "",
  episode: [],
  url: "",
  created: "",
};

const App = () => {
  const [characterData, setCharacterData] = useState([characterDataDefault]);
  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/")

        .then((res) => {
          setCharacterData(res.data.results);
        })
        .catch((beef) => {
          console.log("Failure in App.js", beef);
        });
    };
    fetchData();
  }, []);

  return (
    <StyledDiv className="App">
      <h1 className="Header">Characters</h1>
      {characterData.map((characterData) => {
        return (
          <Character key={characterData.id} characterData={characterData} />
        );
      })}
    </StyledDiv>
  );
};

export default App;

const StyledDiv = styled.div`
  background-color: ${(pr) => pr.theme.primaryColor};
  color: ${(pr) => pr.theme.black};
`;
