import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";

const characterDataDefault = {
  id: "",
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
  // BUNCHA CONSTS HERE FOR THE STATE STUFF
  const [characterData, setCharacterData] = useState('steve');
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // FETCH API HERE!!!   USE AN EFFECT HOOK!!!
  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/")

        .then((res) => {
          const stank = res.data.results
          setCharacterData(
            stank.map((characterData) => {
              // console.log('37',characterData);
              return characterData
            } )
          )
          // setCharacterData(res.data.results);
          // // console.log("App.js .then", res.data);
          // // console.log("App.js .then.id", res.data.results)
          // console.log('37' ,res.data.results[1].name);
        })
//MAP THROUGH SET CHARACTER DATA!
        .catch((beef) => {
          console.log("Failure in App.js", beef);
        });
    };
    fetchData();
    
    // console.log('49',characterData);

  }, []);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // PUT THE STUFF BELOW, AND DO THE FANCY SHMANCY IN CHARACTER.JS

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      < Character characterData = {characterData} />
    </div>
  );
};

export default App;

//Get all characters
// You can access the list of characters by using the /character endpoint.

// Get a single character
// You can get a single character by adding the id as a parameter: /character/2

// Get multiple characters
// You can get multiple characters by adding an array of ids as parameter: /character/[1,2,3] or /character/1,2,3
