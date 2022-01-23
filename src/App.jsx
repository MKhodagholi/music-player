import React from "react";

import Song from "./components/song-palyer/Song";
import Player from "./components/song-palyer/Player";

import "./styles/app.scss";
import { SongProvider } from "./context/SongContext";

function App() {
  return (
    <SongProvider>
      <div className="app">
        <Song />
        <Player />
      </div>
    </SongProvider>
  );
}

export default App;
