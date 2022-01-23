import React from "react";

import Song from "./components/song-palyer/Song";
import Player from "./components/song-palyer/Player";
import Library from "./components/library/Library";

import "./styles/app.scss";
import { SongProvider } from "./context/SongContext";

function App() {
  return (
    <SongProvider>
      <div className="app">
        <Library />
        <Song />
        <Player />
      </div>
    </SongProvider>
  );
}

export default App;
