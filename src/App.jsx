import React from "react";
import PlayersList from "./PlayersList";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", margin: "2rem" }}>Liste des Joueurs</h1>
      <PlayersList />
    </div>
  );
}

export default App;
