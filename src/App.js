import React from "react";
import Pokemon from "./Pokemon";
import Cat from "./Cat";
import Starwars from "./Starwars";
import Task1 from "./Task1";
import Users from "./Users";

function App() {
  return (
    <div className="App">
        <div className="row offset-sm-0 my-2">
            <Task1 />
            <Starwars />
            <Cat />
            <Pokemon />
            <Users />
        </div>
    </div>
  );
}

export default App;
