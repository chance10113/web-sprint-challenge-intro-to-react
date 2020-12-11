import React from 'react';
import './App.css';
import Axios from 'axios'

const App = () => {
// BUNCHA CONSTS HERE FOR THE STATE STUFF

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

// FETCH API HERE!!!   USE AN EFFECT HOOK!!!

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

// PUT THE STUFF BELOW, AND DO THE FANCY SHMANCY IN CHARACTER.JS

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
