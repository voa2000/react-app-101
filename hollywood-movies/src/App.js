import React from "react";
import "./App.css";
import Movie from "./Movies";
import avengers from "./images/avengers.png";
import captain from "./images/captainmavel.jpg";
import meninblack from "./images/meninblack.jpg";

function App() {
  return (
    <div className='App'>
      <h1>My Hollywood Movies App </h1>
      <Movie title='Avengers Endgame' image={avengers} year={"2019"} />
      <Movie title='Captain America' image={captain} year={"2018"} />
      <Movie
        title='Men in Black International'
        image={meninblack}
        year={"2019"}
      />
    </div>
  );
}

export default App;
