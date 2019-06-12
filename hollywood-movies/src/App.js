import React from "react";
import "./App.css";
import avengers from "./images/avengers.png";
import captain from "./images/captainmavel.jpg";
import meninblack from "./images/meninblack.jpg";

function App() {
  return (
    <div className='App'>
      <h1>My Hollywood Movies App </h1>

      <div>
        <h2>Avengers Endgame</h2>
        <img src={avengers} alt='Avengers' />
      </div>
      <div>
        <h2>Captain America</h2>
        <img src={captain} alt='Avengers' />
      </div>
      <div>
        <h2>Men in Black</h2>
        <img src={meninblack} alt='Avengers' />
      </div>
    </div>
  );
}

export default App;
