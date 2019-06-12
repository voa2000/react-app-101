import React from "react";
import "./App.css";
import avengers from "./images/avengers.png";

function App() {
  return (
    <div className='App'>
      <h1>My Hollywood Movies App </h1>

      <div>
        <h2>Avengers Endgame</h2>
        <img src={avengers} alt='Avengers' />
      </div>
      <div>
        <h2>Captin America</h2>
        <img src={avengers} alt='Avengers' />
      </div>
      <div>
        <h2>Avengers Endgame</h2>
        <img src={avengers} alt='Avengers' />
      </div>
    </div>
  );
}

export default App;
