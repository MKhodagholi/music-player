import React from "react";

import Song from "./components/song-palyer/Song";
import Player from "./components/song-palyer/Player";

import "./styles/app.scss";

function App() {
  return (
    <div className="app">
      <Song />
      <Player />
    </div>
  );
}

export default App;
